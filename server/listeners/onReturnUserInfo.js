import User from '../models/user';
import { getUserByIdService } from '../service/user/getUserByIdService';

export default async (io, socket) => {
	if (socket.decoded && socket.decoded.id) {
		const user = await getUserByIdService(socket.decoded.id);
		socket.emit('user:info', user);
	}
};
