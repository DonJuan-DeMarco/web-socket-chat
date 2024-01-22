import { useEffect, useState } from 'react';
import { socket } from '../../../services/socket/socket';

export default function useMessageService() {
	const [messageLog, setMessageLog] = useState([]);
	const [muted, setMuted] = useState(null);

	const onSendMessage = (message, setMessage) => {
		socket.emit('message:send', { message });
		setMessage('');
	};

	useEffect(() => {
		if (socket) {
			socket.on('message:receive', (data) => {
				setMessageLog((prevMessages) => [...prevMessages, data]);
			});
			socket.on('message:log', (data) => {
				setMessageLog(data);
			});
			socket.on('message:stopped', (data) => {
				setMuted(data);
			});
			socket.on('message:mute', (data) => {
				setMuted(data.mute ? 'You are muted!' : null);
			});
		}
		return () => {
			socket.off('message:receive');
			socket.off('message:receive');
			socket.off('message:stopped');
			socket.off('message:log');
		};
	}, []);

	return { messageLog, onSendMessage, muted };
}
