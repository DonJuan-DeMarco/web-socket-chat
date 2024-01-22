import { useEffect, useState } from 'react';
import { socket } from '../../../services/socket/socket';

export default function useGetPersonalInfoService() {
	const [info, setInfo] = useState(null);
	useEffect(() => {
		socket.on('user:info', (data) => {
			setInfo(data);
		});

		return () => {
			socket.off('user:info');
		};
	}, []);

	return { info, setInfo };
}
