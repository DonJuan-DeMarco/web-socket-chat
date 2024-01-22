import { io } from 'socket.io-client';
import { SERVER_URL } from '../../config/constants/apiConstants';

export const socket = io(SERVER_URL, {
	autoConnect: false,
});
