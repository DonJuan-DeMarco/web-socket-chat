import { getUsersAllService } from '../service/user/getUsersAllService';

export default (io, socket, onlineUsers) => {
	if (socket.decoded && socket.decoded.id) {
		const categorizeUsers = (users, onlineIds) => {
			let onlineUsers = [];
			let offlineUsers = [];

			users.forEach((user) => {
				if (onlineIds[user._id]) {
					onlineUsers.push(user);
				} else {
					offlineUsers.push(user);
				}
			});

			return [
				{ _id: 'online', users: onlineUsers },
				{ _id: 'offline', users: offlineUsers },
			];
		};

		const showUsers = async () => {
			if (socket.decoded && socket.decoded.id) {
				const users = await getUsersAllService();
				const categorizedList = categorizeUsers(users, onlineUsers);
				io.sockets.sockets.forEach((socket) => {
					socket.emit(
						'users:list',
						socket.admin
							? categorizedList
							: categorizedList.filter(
									(group) => group._id === 'online'
							  )
					);
				});
			}
		};
		showUsers();
	}
};
