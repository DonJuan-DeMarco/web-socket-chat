import { useEffect } from 'react';
import { socket } from '../../../services/socket/socket';
import { useNavigate } from 'react-router';

export default function useConnectService(
	authToken,
	setAuthToken,
	setLoginError,
	loggedIn
) {
	const navigate = useNavigate();

	useEffect(() => {
		if (socket && authToken) {
			socket.auth = { token: authToken };
			socket.connect();
			socket.on('connect_error', (err) => {
				setLoginError(err.message);
				console.log(`connect_error due to ${err.message}`);

				setAuthToken(null);
			});

			socket.on('connect', () => {
				console.log(`Connected`);
			});

			socket.on('disconnect', () => {
				setAuthToken(null);
				setLoginError('Disconnected!');
			});

			return () => {
				socket.disconnect();
				socket.off('connect');
				socket.off('disconnect');
				socket.off('connect_error');
			};
		}
	}, [authToken, setLoginError, navigate, setAuthToken]);
}
