import IsAdmin from '../constants/isAdmin';

export default async function SetSocketAdmin(socket, next) {
	if (socket.decoded && socket.decoded.id) {
		socket.admin = await IsAdmin(socket.decoded.id);
		next();
	} else {
		next(new Error('Role setting error'));
	}
}
