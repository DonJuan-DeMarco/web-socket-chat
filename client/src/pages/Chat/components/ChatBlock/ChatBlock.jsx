import { useContext, useState } from 'react';
import * as Styled from '../../styles';
import useMessageService from '../../hooks/useMessageService';
import ChatLog from './components/ChatLog/ChatLog';
import { LoginContext } from '../../../../state/loginState';

export default function ChatBlock() {
	const [message, setMessage] = useState('');

	const { onSendMessage, muted } = useMessageService();

	const { showChat } = useContext(LoginContext);
	return (
		<Styled.ChatBlock showChat={showChat}>
			<ChatLog />
			<Styled.InputBlock>
				<Styled.InputForm
					onSubmit={(e) => {
						e.preventDefault();
						onSendMessage(message, setMessage);
					}}
				>
					<Styled.ChatInput
						fullWidth
						type='text'
						value={message}
						placeholder={muted || 'Message...'}
						onChange={(e) => setMessage(e.target.value)}
						maxLength={200}
						disabled={!!muted}
					/>
					<Styled.ChatButton type='submit' disabled={!!muted}>
						Send
					</Styled.ChatButton>
				</Styled.InputForm>
			</Styled.InputBlock>
		</Styled.ChatBlock>
	);
}
