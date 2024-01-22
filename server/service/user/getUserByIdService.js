import User from '../../models/user';

export const getUserByIdService = async (userId, withPassword = false) => {
	try {
		const user = await User.findById(
			userId,
			withPassword ? '' : '-password'
		);
		return user;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
