import { socket } from '../../../services/socket/socket';

export default function useUserControlService() {
	const onMuteUser = (isMuted, user_id) => {
		socket.emit(`user:${isMuted ? 'unmute' : 'mute'}`, { user_id });
	};

	const onBanUser = (isBanned, user_id) => {
		socket.emit(`user:${isBanned ? 'unban' : 'ban'}`, { user_id });
	};

	return { onBanUser, onMuteUser };
}
