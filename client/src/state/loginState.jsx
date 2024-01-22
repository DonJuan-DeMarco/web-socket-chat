import React, { createContext, useEffect, useState } from 'react';

export const initErrorState = {
	password: null,
	username: null,
};

export const LoginContext = createContext();

export const LoginProvider = ({ children }) => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [loggedIn, setLoggedIn] = useState(false);
	const [credentialsError, setCredentialsError] = useState(initErrorState);
	const [loginError, setLoginError] = useState(null);
	const [authToken, setAuthToken] = useState(null);
	const [showChat, setShowChat] = useState(true);

	return (
		<LoginContext.Provider
			value={{
				username,
				password,
				credentialsError,
				loginError,
				loggedIn,
				authToken,
				showChat,
				setUsername,
				setPassword,
				setCredentialsError,
				setLoginError,
				setLoggedIn,
				setAuthToken,
				setShowChat,
			}}
		>
			{children}
		</LoginContext.Provider>
	);
};
