import ChatMessage from "../../../components/ChatMessage/ChatMessage";
import { useSelector } from "react-redux";
import "./ChatBox.css";

export default function ChatBox() {
	const { messages } = useSelector((state) => state.message);
	return (
		<div className="ChatBox">
			<div className="ChatBox-messagecontainer">
				{messages.map((msg) => (
					<ChatMessage from={msg.username} message={msg.message} />
				))}
			</div>
		</div>
	);
}
