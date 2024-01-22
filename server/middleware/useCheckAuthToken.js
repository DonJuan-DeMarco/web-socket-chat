import jwt from 'jsonwebtoken';
import User from '../models/user';

export default function CheckAuthToken(socket, next) {
	if (socket.handshake.auth && socket.handshake.auth.token) {
		jwt.verify(
			socket.handshake.auth.token,
			process.env.ACCESS_TOKEN_PRIVATE_KEY,
			async function (err, decoded) {
				if (err) return next(new Error('Authentication error'));
				const user = await User.findById(decoded.id);
				if (!user) return next(new Error('Non existing user'));
				socket.decoded = decoded;

				next();
			}
		);
	} else {
		next(new Error('Authentication error'));
	}
}
