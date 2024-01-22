import styled from 'styled-components';
import {
	BaseButton,
	BaseInput,
	BaseRectangle,
	PrimeButton,
} from '../../mixinStyles';

import { PUBLIC_URL } from '../../config/constants/apiConstants';
import {
	colorBlue,
	colorDarkGray,
	colorHalfThirdBlack,
	colorHalfWhite,
	colorLightBlue,
	colorLightGray,
	colorLightWhite,
	colorMediumGray,
	colorQuarterBlack,
	colorRed,
	colorWhite,
	colorWhiteWashed,
} from '../../config/styles/common';

export const ChatPage = styled.div`
	/* display: flex; */
	display: grid;
	align-items: center;
	justify-content: center;
	background-color: ${colorBlue};
	width: 100%;
	height: 100%;
	max-height: 100%;
	grid-template-rows: repeat(1, 100svh);
	grid-template-columns: 1fr auto 1fr;
	grid-template-areas: 'profile chat users';

	@media (max-width: 900px) {
		grid-template-rows: 80% 20%;
		grid-template-columns: auto 1fr;
		grid-template-areas:
			'chat users'
			'chat profile';
	}

	@media (max-width: 600px) {
		display: flex;
		flex-direction: column;
	}
`;

export const ChatBlock = styled.div`
	grid-area: chat;
	display: flex;
	background-color: ${colorMediumGray};
	flex-direction: column;
	max-height: 100%;
	align-items: center;
	justify-content: space-between;
	flex: 1 1 0;
	height: 100%;

	@media (max-width: 600px) {
		display: ${({ showChat }) => (showChat ? 'flex' : 'none')};
		flex-direction: column;
		height: 85svh;
		max-height: 85svh;
	}
`;

export const InputBlock = styled.div`
	display: flex;
	background-color: ${colorMediumGray};
	width: 100%;
	padding: 0.5rem 2rem 2rem 1rem;
`;

export const InputForm = styled.form`
	display: flex;
	width: 100%;
	gap: 1rem;
	height: 100%;
`;
export const ChatInput = styled.input`
	${({ fullWidth, error }) =>
		fullWidth ? BaseInput({ fullWidth, error }) : BaseInput}
	background-color: ${colorLightWhite};
	font-size: 1.2rem;
	/* height: fit-content; */
`;

export const ChatButton = styled.button`
	${({ fullWidth }) => (fullWidth ? PrimeButton({ fullWidth }) : PrimeButton)}
`;

export const UsersBlock = styled.div`
	grid-area: users;
	display: flex;
	background-color: ${colorDarkGray};
	height: 100%;
	flex-direction: column;
	width: 25rem;
	gap: 2rem;
	padding: 2rem 1rem;
	overflow: auto;

	@media (max-width: 600px) {
		display: ${({ showChat }) => (!showChat ? 'flex' : 'none')};
		width: 100%;
		padding: 1rem;
		height: 85%;
		max-height: 85svh;
	}
`;

export const UsersGroup = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;

export const UsersGroupHeader = styled.p`
	font-size: 0.9rem;
	color: ${colorWhiteWashed};
	text-transform: uppercase;
	font-weight: lighter;
`;

export const UserImage = styled.img`
	min-height: 2.7rem;
	min-width: 2.7rem;
	max-width: 2.7rem;
	max-height: 2.7rem;
	border-radius: 50%;
`;

export const UserRole = styled.span`
	border: 1px solid gold;
	border-radius: 20px;
	font-size: 0.55rem;
	padding: 0.15rem 0.25rem;
	color: gold;
	text-transform: capitalize;
	font-weight: 400;
`;

export const UserName = styled.span`
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
	width: 100%;
	color: ${({ color }) => color || colorWhite};
`;

export const UserInfo = styled.div`
	display: flex;
	align-items: flex-start;
	gap: 0.1rem;
	flex-direction: column;
	justify-content: center;
	overflow: hidden;
`;

export const UserControls = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: flex-end;
	align-items: center;
`;

export const UserMute = styled.button`
	background-image: url(${PUBLIC_URL + 'assets/icons/mute.png'});
	background-size: 50%;
	background-position: center;
	background-repeat: no-repeat;
	border-radius: 50%;
	cursor: pointer;
	height: 100%;
	width: fit-content;
	aspect-ratio: 1/1;
	background-color: transparent;
	opacity: 0.5;
	display: none;

	&:hover {
		opacity: 1;
		filter: invert(50%);
		background-color: ${colorLightWhite};
	}
	&:active {
		filter: invert(75%);
		background-color: ${colorHalfWhite};
	}

	&.activated {
		opacity: 1;
		filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
			brightness(94%) contrast(80%);
		display: flex;

		&:hover {
			filter: invert(21%) sepia(100%) saturate(7414%) hue-rotate(359deg)
				brightness(94%) contrast(100%);
		}
	}
`;

export const UserBan = styled(UserMute)`
	background-image: url(${PUBLIC_URL + 'assets/icons/ban.png'});
`;

export const UserLine = styled.div`
	font-size: 1.1rem;
	display: grid;
	grid-template-columns: auto 1fr 3rem;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
	padding: 0.5rem;
	${BaseRectangle}

	&:hover {
		background-color: ${colorLightWhite};

		& > ${UserBan},${UserMute} {
			display: flex;
		}
	}
`;

export const ChatLogBlock = styled.div`
	display: flex;
	flex-flow: wrap;
	background-color: ${colorMediumGray};
	align-items: flex-start;
	justify-content: flex-end;
	gap: 0.5rem;
	overflow-y: auto;
	width: 100%;
	padding: 1rem;
`;

export const MessageBlock = styled.div`
	${BaseRectangle};
	font-size: 1.1rem;
	display: flex;
	align-items: center;
	gap: 1rem;
	cursor: pointer;
	padding: 0.5rem;
	width: 100%;

	&:hover {
		background-color: ${colorLightWhite};
	}
`;

export const MessageImage = styled.img`
	width: 4rem;
	height: auto;
	border-radius: 50%;
	flex-grow: 0;
`;

export const MessageTextBlock = styled.div``;

export const MessageLine = styled.p`
	width: 100%;
	word-break: break-all;
`;

export const MessageUser = styled.p`
	color: ${({ color }) => color || colorWhite};

	& > span {
		padding-left: 0.5rem;
		color: ${colorWhiteWashed};
		font-size: 0.65rem;
	}
`;

export const PersonalInfoBlock = styled(UsersBlock)`
	grid-area: profile;
	align-items: center;
	padding: 1rem 2rem;
	justify-content: flex-end;

	@media (max-width: 900px) {
		display: grid;
		gap: 0.1rem;
		grid-template-rows: 1fr auto auto;
		justify-items: center;
		grid-template-columns: 6rem 1fr;
		height: 15svh;
		grid-template-areas:
			'. . .'
			'avatar name role'
			'button button button';
	}

	@media (max-width: 600px) {
		width: 100%;
		padding: 0;
		overflow: hidden;

		grid-template-rows: 1fr auto auto auto;
		grid-template-areas:
			'avatar name role button2'
			'button button button button';
	}
`;

export const PersonalAvatar = styled.img`
	grid-area: avatar;
	width: 80%;
	@media (max-width: 900px) {
		height: 80%;
	}
`;

export const PersonalName = styled(UserName)`
	grid-area: name;
	text-align: center;
	font-size: 1.5rem;
`;

export const PersonalRole = styled(UserRole)`
	grid-area: role;
	font-size: 0.85rem;
`;

export const PersonalButton = styled.button`
	grid-area: button;
	${({ fullWidth }) => (fullWidth ? BaseButton({ fullWidth }) : BaseButton)}
	font-size: 1.5rem;
	color: ${colorRed};
`;

export const PersonalListButton = styled(PersonalButton)`
	grid-area: button2;
	color: ${colorLightBlue};
	display: none;
	margin-left: 1rem;
	margin-right: 1rem;
	@media (max-width: 600px) {
		display: initial;
	}
`;
