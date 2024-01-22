import { initErrorState } from '../../state/loginState';
import AuthAPI from '../http/authAPI';

const submitHandler = async (
	setLoginError,
	{ username, password },
	setCredentialsError,
	setToken
) => {
	setLoginError(null);
	const response = await AuthAPI(username, password);

	setCredentialsError(initErrorState);
	if (!response.ok && response.status !== 422) {
		return setLoginError(await response.text());
	}

	const data = await response.json();

	if (response.status === 422) {
		return setCredentialsError((prevErrors) => ({
			...prevErrors,
			...data,
		}));
	}
	setToken(data.token);
};
export default submitHandler;
