import onGetUsersList from './onGetUsersList';

export default (io, socket, onlineUsers) => {
	onlineUsers[socket.decoded.id] = socket.id;

	onGetUsersList(io, socket, onlineUsers);

	socket.on('disconnect', () => {
		delete onlineUsers[socket.decoded.id];

		onGetUsersList(io, socket, onlineUsers);
	});
};
