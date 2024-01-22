import { css } from 'styled-components';
import {
	colorBlue,
	colorHalfBlack,
	colorQuarterBlack,
	colorRed,
	colorShadow,
} from './config/styles/common';

export const BaseRectangle = `
	border-radius: 0.2rem;
`;

export const BaseDiv = `
	${BaseRectangle}
	box-shadow:${colorShadow} 0px 8px 24px;
`;

export const BaseInput = ({ fullWidth = false, error = false }) => `
	${BaseRectangle}
	background-color:${colorQuarterBlack};
	border: ${error ? '1px solid ' + colorRed : 'none'};
	padding: 1rem;
	width: ${fullWidth ? '100%' : 'fit-content'};
`;

export const BaseButton = ({ fullWidth = false }) => css`
	${BaseRectangle}
	background-color:${colorHalfBlack};
	border: none;
	padding: 1rem;
	width: ${fullWidth ? '100%' : 'fit-content'};
	cursor: pointer;
	transition: 0.3s;

	&:hover {
		box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.1);
	}
	&:active {
		box-shadow: inset 0 0 0 1000px rgba(0, 0, 0, 0.2);
	}
	&:disabled {
		background-color: ${colorQuarterBlack};
		color: ${colorHalfBlack};
		cursor: not-allowed;
	}
`;

export const PrimeButton = ({ fullWidth = false }) => css`
	${BaseButton({ fullWidth })}
	background-color: ${colorBlue};
`;
