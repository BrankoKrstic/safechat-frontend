import ChatMessage from "../../../components/ChatMessage/ChatMessage";
import "./ChatBox.css";

export default function ChatBox() {
	return (
		<div className="ChatBox">
			<div className="ChatBox-messagecontainer">
				<ChatMessage
					from="whomever"
					message="Very important crucial message text"
				/>
				<ChatMessage from="whomever" message="Message text" />
			</div>
		</div>
	);
}
