import { createGlobalStyle, css } from 'styled-components';
import { BaseButton, BaseInput } from './mixinStyles';
import {
	colorDarkGray,
	colorHalfBlack,
	colorWhite,
} from './config/styles/common';

const GlobalStyle = createGlobalStyle`
	* {
		box-sizing: border-box;
		outline: none;
		color: ${colorWhite};
		margin: 0;
		padding: 0;
	}
	html {
		font-size: 10px;
	}
	body {
		font-family: Open-Sans, Helvetica, Sans-Serif;
	}
	#root {
		width: 100%;
		height: 100svh;
	}
	input {
		${BaseInput}
	}
	button {
		${BaseButton}
	}
	/* width */
	::-webkit-scrollbar {
		width: 8px;
	}

	/* Track */
	::-webkit-scrollbar-track {
		background: ${colorDarkGray};
		border-radius: 20px;
		border-right: 3px transparent solid;
		background-clip: padding-box;
	}

	/* Handle */
	::-webkit-scrollbar-thumb {
		background: ${colorHalfBlack};
		border-radius: 20px;
		border-right: 3px transparent solid;
		background-clip: padding-box;
	}
`;

export default GlobalStyle;
