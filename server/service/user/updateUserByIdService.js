import User from '../../models/user';

export const updateUserByIdService = async (userId, field) => {
	try {
		if (typeof field !== 'object' || Array.isArray(field)) {
			throw new Error('Field should be an object');
		}
		const result = await User.findByIdAndUpdate(userId, {
			$set: { ...field },
		});
		return result;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
