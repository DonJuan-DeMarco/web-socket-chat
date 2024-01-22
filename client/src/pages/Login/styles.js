import styled from 'styled-components';
import { BaseDiv, BaseInput, PrimeButton } from '../../mixinStyles';
import {
	colorMediumGray,
	colorRed,
	colorWhiteWashed,
} from '../../config/styles/common';
import { PUBLIC_URL } from '../../config/constants/apiConstants';

export const LoginPage = styled.div`
	display: flex;
	height: 100%;
	align-items: center;
	justify-content: center;
	background-image: url(${PUBLIC_URL + 'assets/purple_background.png'});
	background-size: cover;
	background-position: center 0;
	background-repeat: no-repeat;
`;

export const LoginBox = styled.div`
	${BaseDiv};
	background-color: ${colorMediumGray};
	display: flex;
	flex-direction: column;
	width: 40rem;
	height: auto;
	align-items: center;
	justify-content: center;
	padding: 2rem 1rem;
`;

export const GreetingHeader = styled.h2`
	margin: 1rem 0;
`;

export const GreetingSubHeader = styled.p`
	color: ${colorWhiteWashed};
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	width: 100%;
	height: -webkit-fill-available;
	height: 100%;
	padding: 0.5rem 1rem;
	gap: 2rem;
	align-items: center;
	justify-content: center;
`;

export const LoginLabel = styled.label`
	display: flex;
	flex-direction: column;
	width: 100%;
	gap: 0.5rem;
	color: ${colorWhiteWashed};
	font-weight: bold;
	text-transform: uppercase;
`;

export const LoginText = styled.p`
	color: inherit;
`;

export const LoginError = styled.span`
	color: ${colorRed};
	text-transform: lowercase;
`;
export const LoginInput = styled.input`
	${({ fullWidth, error }) =>
		fullWidth ? BaseInput({ fullWidth, error }) : BaseInput}
`;

export const LoginButton = styled.button`
	${({ fullWidth }) => (fullWidth ? PrimeButton({ fullWidth }) : PrimeButton)}
`;
