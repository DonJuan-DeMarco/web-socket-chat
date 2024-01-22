import { useContext } from 'react';
import GlobalStyle from './globalStyle';
import { Route, Routes, Navigate } from 'react-router-dom';
import Chat from './pages/Chat/Chat';
import Login from './pages/Login/Login';
import { LoginContext } from './state/loginState';
import submitHandler from './services/components/handleSubmit';
import useAuthRouter from './hooks/useAuthRouter';

export default function App() {
	const {
		username,
		password,
		setCredentialsError,
		setLoginError,
		authToken,
		setAuthToken,
	} = useContext(LoginContext);

	useAuthRouter(authToken, setAuthToken);

	const setToken = (token) => {
		setAuthToken(token);
		localStorage.setItem('token', token);
	};

	const onHandleSubmit = async (event) => {
		event.preventDefault();
		submitHandler(
			setLoginError,
			{ username, password },
			setCredentialsError,
			setToken
		);
	};

	return (
		<>
			<GlobalStyle />

			<Routes>
				<Route path='/chat' element={<Chat />} />
				<Route
					path='/login'
					element={<Login handleSubmit={onHandleSubmit} />}
				/>
				<Route path='*' element={<Navigate to='/login' />} />
			</Routes>
		</>
	);
}
