import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';
import { AvatarGenerator } from 'random-avatar-generator';
import User from '../models/user';
import bcrypt from 'bcrypt';
import validateRequest from '../constants/validateRequest';

const authController = {
	register: async (request, response, next) => {
		const { username, password } = request.body;

		const errors = validateRequest({ username, password });

		if (errors) {
			return response.status(422).send(errors);
		}

		if (!username || !password) {
			return response
				.status(400)
				.send('Username and password are required.');
		}

		const existingUser = await User.findOne({ username });

		request.body.existingUser = existingUser;

		if (existingUser) {
			next();
		} else {
			const hashedPassword = await bcrypt.hash(
				password,
				+process.env.SALT
			);

			let role = null;

			try {
				const count = await User.countDocuments({});
				if (count < 1) role = 'admin';
			} catch (err) {
				console.error(err);
			}

			const generator = new AvatarGenerator();
			const registeredUser = new User({
				username,
				avatar: generator.generateRandomAvatar(),
				password: await hashedPassword,
				color: '#' + Math.floor(Math.random() * 16777215).toString(16),
				role: role ?? 'user',
			});

			try {
				request.body.existingUser = await registeredUser.save();
			} catch (err) {
				return response
					.status(500)
					.send('Registration of user failed.');
			}

			next();
		}
	},

	login: async (request, response, next) => {
		const { username, password, existingUser } = request.body;

		const passwordMatch = await bcrypt.compare(
			password,
			existingUser?.password
		);

		if (!passwordMatch) {
			return response.status(401).send('Invalid credentials.');
		}

		try {
			const token = jwt.sign(
				{ username: existingUser.username, id: existingUser.id },
				process.env.ACCESS_TOKEN_PRIVATE_KEY,
				{ expiresIn: '1d' }
			);

			return response.json({ token });
		} catch (err) {
			return response.status(500).send('Login failed.');
		}
	},
};
export default authController;
