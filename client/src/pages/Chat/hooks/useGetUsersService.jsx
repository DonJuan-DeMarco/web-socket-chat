import { useEffect, useState } from 'react';
import { socket } from '../../../services/socket/socket';

export default function useGetUsersService() {
	const [usersList, setUsersList] = useState([{ _id: null, users: [] }]);

	useEffect(() => {
		socket.on('users:list', (users) => {
			setUsersList(
				users.sort((a, b) => {
					if (a._id === 'online') return -1;
					if (b._id === 'online') return 1;
					return 0;
				})
			);
		});

		return () => {
			socket.off('users:list');
		};
	}, []);

	return usersList;
}
