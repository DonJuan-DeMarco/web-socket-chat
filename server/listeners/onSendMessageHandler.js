import { sendMessageService } from '../service/user/sendMessageService';
import { getUserByIdService } from '../service/user/getUserByIdService';

export default (io, socket) => {
	const sendMessage = async (payload) => {
		if (
			!payload ||
			!payload.message ||
			typeof payload.message !== 'string' ||
			payload.message.trim().length > 200
		)
			return socket.emit('message:error', 'Message didn`t validate');

		const user = await getUserByIdService(socket.decoded.id);

		if (user.mute || user.ban) {
			return socket.emit('message:stopped', 'You`re muted');
		}

		const message = await sendMessageService(socket, payload.message);

		io.emit('message:receive', message);
	};

	socket.on('message:send', sendMessage);
};
