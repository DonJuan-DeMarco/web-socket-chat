import User from '../models/user';

export default async function IsAdmin(user_id) {
	const user = await User.findById(user_id);

	return user?.role === 'admin' ? true : false;
}
