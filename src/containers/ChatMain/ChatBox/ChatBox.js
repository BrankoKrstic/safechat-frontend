import ChatMessage from "../../../components/ChatMessage/ChatMessage";
import { useSelector } from "react-redux";
import "./ChatBox.css";

export default function ChatBox() {
	const { messages } = useSelector((state) => state.chat);
	return (
		<div className="ChatBox">
			<div className="ChatBox-messagecontainer">
				{messages.map((msg, i) => (
					<ChatMessage
						key={i}
						from={msg.username}
						message={msg.message}
					/>
				))}
			</div>
		</div>
	);
}
