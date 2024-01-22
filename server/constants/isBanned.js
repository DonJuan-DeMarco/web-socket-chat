import User from '../models/user';

export default async function IsBanned(user_id) {
	const user = await User.findById(user_id);

	return user?.ban;
}
