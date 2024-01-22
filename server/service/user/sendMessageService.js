import Message from '../../models/message';

export const sendMessageService = async (socket, text) => {
	try {
		const message = new Message({
			userId: socket.decoded.id,
			text,
		});
		const savedMessage = await message.save();

		const plainMessage = savedMessage.toObject();

		plainMessage.userId = {
			username: socket.username,
			color: socket.color,
			avatar: socket.avatar,
		};
		return await plainMessage;
	} catch (error) {
		console.error(error);
		throw error;
	}
};
