import ChatMessage from "../../../components/ChatMessage/ChatMessage";
import { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import "./ChatBox.css";

export default function ChatBox() {
	const { messages, currentRoom } = useSelector((state) => state.chat);
	const scrollDiv = useRef(null);
	useEffect(() => {
		scrollDiv.current.scrollIntoView({ behavior: "smooth" });
	}, [messages]);
	return (
		<div className="ChatBox">
			<div className="ChatBox-messagecontainer">
				{messages.map((msg, i) => {
					if (msg.room === currentRoom) {
						return (
							<ChatMessage
								key={i}
								from={msg.username}
								message={msg.message}
							/>
						);
					}
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
