import User from '../models/user';

export default async function IsOnline(user_id) {
	const user = await User.findById(user_id);

	return user?.status === 'online' ? true : false;
}
