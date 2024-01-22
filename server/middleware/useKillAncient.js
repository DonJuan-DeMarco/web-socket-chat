import IsOnline from '../constants/isOnline';

export default async function KillAncient(
	io,
	socket,
	next,
	onlineUsers,
	userId
) {
	try {
		io.sockets.sockets.forEach((socket) => {
			if (socket.id === onlineUsers[userId]) socket.disconnect();
		});
	} catch (e) {
		next(new Error('Kill ancient error'));
	}

	next();
}
