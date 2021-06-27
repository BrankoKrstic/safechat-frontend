import "./ChatMessage.css";

export default function ChatMessage(props) {
	return (
		<div className="ChatMessage">
			<div className="ChatMessage-message">{props.message}</div>
			<div className="ChatMessage-sender">{props.from}</div>
		</div>
	);
}
