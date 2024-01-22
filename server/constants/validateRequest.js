export default function validateRequest({ username, password }) {
	const errors = {};
	if (!username.match(/^[A-Za-z0-9]+$/)) {
		errors.username = 'Username must not have special characters';
	}

	if (username.length < 3) {
		errors.username = 'Username must be at least 3 characters long';
	}

	if (password.length < 6) {
		errors.password = 'Password must be at least 6 characters long';
	}

	if (Object.keys(errors).length !== 0) return errors;
	return null;
}
