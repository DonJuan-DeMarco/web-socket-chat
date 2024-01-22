import Message from '../../models/message';

export const getMessageLogService = async () => {
	try {
		const response = await Message.find()
			.populate('userId', 'color username avatar')
			.limit(20)
			.sort({ timestamp: -1 })
			.lean();

		return response.reverse();
	} catch (error) {
		console.error(error);
		throw error;
	}
};
