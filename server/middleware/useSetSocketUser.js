import { getUserByIdService } from '../service/user/getUserByIdService';

export default async function SetSocketUser(socket, next) {
	if (socket.decoded && socket.decoded.id) {
		const user = await getUserByIdService(socket.decoded.id);
		if (user) {
			socket.username = user.username;
			socket.color = user.color;
			socket.avatar = user.avatar;
		}
		next();
	} else {
		next(new Error('Socket user setting error'));
	}
}
