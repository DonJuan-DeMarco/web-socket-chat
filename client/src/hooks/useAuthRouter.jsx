import { useEffect } from 'react';
import { useNavigate } from 'react-router';

export default function useAuthRouter(authToken, setAuthToken) {
	const navigate = useNavigate();
	useEffect(() => {
		const savedToken = localStorage.getItem('token');
		if (savedToken) {
			setAuthToken(savedToken);
		} else {
			setAuthToken(null);
		}
		return () => {
			setAuthToken(null);
		};
	}, [setAuthToken]);

	useEffect(() => {
		if (authToken) {
			return navigate('/chat');
		}
		navigate('/login');
		return () => {
			navigate('/login');
		};
	}, [authToken, navigate]);
}
