import * as Styled from '../../styles';
import useGetUsersService from '../../hooks/useGetUsersService';
import { socket } from '../../../../services/socket/socket';
import useUserControlService from '../../hooks/useUserControlService';
import useGetPersonalInfoService from '../../hooks/useGetPersonalInfo';
import { LoginContext } from '../../../../state/loginState';
import { useContext } from 'react';

export default function PersonalInfoBlock() {
	const { info } = useGetPersonalInfoService();
	const { showChat, setShowChat } = useContext(LoginContext);
	const toggle = () => {
		setShowChat((prevState) => !prevState);
	};
	return (
		<Styled.PersonalInfoBlock>
			<Styled.PersonalAvatar src={info?.avatar} alt='Profile Image' />
			<Styled.PersonalName color={info?.color}>
				{info?.username}
			</Styled.PersonalName>
			{info?.role === 'admin' && (
				<Styled.PersonalRole>admin</Styled.PersonalRole>
			)}
			<Styled.PersonalButton
				fullWidth
				onClick={() => {
					socket.disconnect();
					localStorage.removeItem('token');
				}}
			>
				Disconnect
			</Styled.PersonalButton>
			<Styled.PersonalListButton onClick={toggle}>
				{showChat ? 'Users' : 'Chat'}
			</Styled.PersonalListButton>
		</Styled.PersonalInfoBlock>
	);
}
