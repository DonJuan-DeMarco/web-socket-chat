import User from '../models/user';

export default async function IsMuted(user_id) {
	const user = await User.findById(user_id);

	return user?.mute;
}
