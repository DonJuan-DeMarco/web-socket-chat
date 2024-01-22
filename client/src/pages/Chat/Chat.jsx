import * as Styled from './styles';
import useConnectService from './hooks/useConnectService';
import ChatBlock from './components/ChatBlock/ChatBlock';
import UsersListBlock from './components/UsersListBlock/UsersListBlock';
import PersonalInfoBlock from './components/PersonalInfoBlock/PersonalInfoBlock';
import { useContext } from 'react';
import { LoginContext } from '../../state/loginState';

export default function Chat() {
	const { authToken, setAuthToken, setLoginError, loggedIn, setLoggedIn } =
		useContext(LoginContext);

	useConnectService(
		authToken,
		setAuthToken,
		setLoginError,
		loggedIn,
		setLoggedIn
	);

	return (
		<Styled.ChatPage>
			<PersonalInfoBlock />
			<ChatBlock />
			<UsersListBlock />
		</Styled.ChatPage>
	);
}
