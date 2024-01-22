import { useContext } from 'react';
import * as Styled from './styles';
import { LoginContext } from '../../state/loginState';

export default function Login({ handleSubmit }) {
	const { setUsername, setPassword, credentialsError, loginError } =
		useContext(LoginContext);

	return (
		<Styled.LoginPage>
			<Styled.LoginBox>
				<Styled.GreetingHeader>Welcome Back!</Styled.GreetingHeader>
				<Styled.GreetingSubHeader>
					We are glad to see you again!
				</Styled.GreetingSubHeader>
				<Styled.LoginForm onSubmit={handleSubmit}>
					<Styled.LoginLabel htmlFor='username'>
						<Styled.LoginText>
							USERNAME{' '}
							{credentialsError.username && (
								<Styled.LoginError>
									* {credentialsError.username}
								</Styled.LoginError>
							)}
						</Styled.LoginText>
						<Styled.LoginInput
							fullWidth
							id='username'
							type='text'
							onChange={(e) => setUsername(e.target.value)}
							error={credentialsError.username}
						/>
					</Styled.LoginLabel>
					<Styled.LoginLabel htmlFor='password'>
						<Styled.LoginText>
							PASSWORD{' '}
							{credentialsError.password && (
								<Styled.LoginError>
									* {credentialsError.password}
								</Styled.LoginError>
							)}
							<Styled.LoginInput
								fullWidth
								id='password'
								type='password'
								onChange={(e) => setPassword(e.target.value)}
								error={credentialsError.password}
							/>
						</Styled.LoginText>
					</Styled.LoginLabel>
					{loginError && (
						<Styled.LoginError>{loginError}</Styled.LoginError>
					)}
					<Styled.LoginButton fullWidth type='submit'>
						Log in
					</Styled.LoginButton>
				</Styled.LoginForm>
			</Styled.LoginBox>
		</Styled.LoginPage>
	);
}
