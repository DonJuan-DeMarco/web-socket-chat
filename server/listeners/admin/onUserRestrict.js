import { updateUserByIdService } from '../../service/user/updateUserByIdService';
import onGetUsersList from '../onGetUsersList';

export default (io, socket, onlineUsers) => {
	const muteUser = async ({ user_id }, mute) => {
		if (socket.decoded && socket.decoded.id) {
			const result = await updateUserByIdService(user_id, { mute });
			if (result) {
				io.sockets.sockets.forEach((socket) => {
					if (socket.decoded.id === user_id)
						socket.emit('message:mute', {
							mute: !result.mute,
						});
				});

				onGetUsersList(io, socket, onlineUsers);
			}
		}
	};
	const banUser = async ({ user_id }, ban) => {
		if (socket.decoded && socket.decoded.id) {
			const result = await updateUserByIdService(user_id, { ban });
			if (result) {
				if (ban) {
					io.sockets.sockets.forEach((socket) => {
						if (socket.decoded.id === user_id) {
							socket.disconnect();
						}
					});
				}

				onGetUsersList(io, socket, onlineUsers);
			}
		}
	};

	socket.on('user:mute', (payload) => muteUser(payload, true));
	socket.on('user:unmute', (payload) => muteUser(payload, false));
	socket.on('user:ban', (payload) => banUser(payload, true));
	socket.on('user:unban', (payload) => banUser(payload, false));
};
