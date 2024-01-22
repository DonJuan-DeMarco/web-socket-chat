import { SERVER_URL } from '../../config/constants/apiConstants';

export default async function AuthAPI(username, password) {
	const response = await fetch(`${SERVER_URL}api/auth/login`, {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify({
			username,
			password,
		}),
	});
	return response;
}
