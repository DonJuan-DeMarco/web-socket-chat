import * as Styled from '../../styles';
import useGetUsersService from '../../hooks/useGetUsersService';
import useUserControlService from '../../hooks/useUserControlService';
import { LoginContext } from '../../../../state/loginState';
import { useContext } from 'react';

export default function UsersListBlock() {
	const usersList = useGetUsersService();
	const { onBanUser, onMuteUser } = useUserControlService();

	const { showChat } = useContext(LoginContext);
	return (
		<Styled.UsersBlock showChat={showChat}>
			{usersList.map((group, idx) => {
				return (
					<Styled.UsersGroup key={idx}>
						<Styled.UsersGroupHeader>
							{group._id}
						</Styled.UsersGroupHeader>
						{group.users.map((user) => (
							<Styled.UserLine key={user._id}>
								<Styled.UserImage
									src={user.avatar}
									alt={user.username}
									width='15px'
								/>
								<Styled.UserInfo>
									<Styled.UserName color={user.color}>
										{user.username}
									</Styled.UserName>
									{user.role === 'admin' && (
										<Styled.UserRole>admin</Styled.UserRole>
									)}
								</Styled.UserInfo>
								<Styled.UserControls>
									<Styled.UserMute
										className={user.mute && 'activated'}
										onClick={() =>
											onMuteUser(user.mute, user._id)
										}
									/>
									<Styled.UserBan
										className={user.ban && 'activated'}
										onClick={() =>
											onBanUser(user.ban, user._id)
										}
									/>
								</Styled.UserControls>
							</Styled.UserLine>
						))}
					</Styled.UsersGroup>
				);
			})}
		</Styled.UsersBlock>
	);
}
