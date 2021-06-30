import ChatMessage from "../../../components/ChatMessage/ChatMessage";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./ChatBox.css";

export default function ChatBox() {
	const { messages, currentRoom } = useSelector((state) => state.chat);
	const currentMessages = messages.filter((msg) => msg.room === currentRoom);
	const scrollDiv = useRef(null);
	useEffect(() => {
		scrollDiv.current.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	return (
		<div className="ChatBox">
			<div className="ChatBox-messagecontainer">
				{currentMessages.map((msg, i) => {
					return (
						<ChatMessage
							key={i}
							from={msg.username}
							message={msg.message}
							isAnimated={i === currentMessages.length - 1}
						/>
					);
				})}
				<div
					style={{
						height: "1px",
						width: "1px",
						backgroundColor: "transparent",
					}}
					ref={scrollDiv}
				></div>
			</div>
		</div>
	);
}
