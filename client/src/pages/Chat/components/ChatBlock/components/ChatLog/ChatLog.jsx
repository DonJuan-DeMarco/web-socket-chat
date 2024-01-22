import { useEffect, useRef } from 'react';
import useMessageService from '../../../../hooks/useMessageService';
import * as Styled from '../../../../styles';

export default function ChatLog() {
	const { messageLog } = useMessageService();
	const chatEndRef = useRef(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			if (chatEndRef.current) {
				chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
			}
		}, 1000);
		return () => clearTimeout(timer);
	}, [messageLog]);

	return (
		<Styled.ChatLogBlock>
			{messageLog.map((logged, idx) => {
				return (
					<Styled.MessageBlock key={idx}>
						<Styled.MessageImage
							src={logged.userId.avatar}
							alt={logged.userId.username}
						/>
						<Styled.MessageTextBlock>
							<Styled.MessageUser color={logged.userId.color}>
								{logged.userId.username}
								<span>
									{new Date(
										logged.timestamp
									).toLocaleString()}
								</span>
							</Styled.MessageUser>
							<Styled.MessageLine>
								{logged.text}
							</Styled.MessageLine>
						</Styled.MessageTextBlock>
					</Styled.MessageBlock>
				);
			})}
			<div ref={chatEndRef} />
		</Styled.ChatLogBlock>
	);
}
