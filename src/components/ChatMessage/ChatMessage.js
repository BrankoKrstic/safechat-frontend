import "./ChatMessage.css";

export default function ChatMessage(props) {
	return (
		<div className="ChatMessage">
			<div
				className={`ChatMessage-message ${
					props.isAnimated && "ChatMessage-message-animated"
				}`}
			>
				{props.message}
			</div>
			<div
				className={`ChatMessage-sender ${
					props.isAnimated && "ChatMessage-sender-animated"
				}`}
			>
				{props.from}
			</div>
		</div>
	);
}
