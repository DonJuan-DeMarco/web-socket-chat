import { getMessageLogService } from '../service/user/getMessageLogService';

export default async (io, socket) => {
	const messages = await getMessageLogService();
	socket.emit('message:log', messages);
};
