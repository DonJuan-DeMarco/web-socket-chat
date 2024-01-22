import IsBanned from '../constants/isBanned';

export default async function CheckIfBanned(socket, next) {
	if (socket.decoded && socket.decoded.id) {
		if (await IsBanned(socket.decoded.id)) {
			next(new Error('You are banned!'));
		} else {
			next();
		}
	} else {
		next(new Error('Invalid decoded ID error'));
	}
}
