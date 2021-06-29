import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { getMessage, setUsers, setMessages } from "../../store/actions/chat";
import ContentBox from "../../components/ContentBox/ContentBox";
import MessageForm from "./MessageForm/MessageForm";
import ChatBox from "./ChatBox/ChatBox";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import "./ChatMain.css";

export default function ChatMain() {
	const { username, userId } = useSelector((state) => state.login);
	const { messages } = useSelector((state) => state.chat);
	const dispatch = useDispatch();
	const socket = io(process.env.REACT_APP_FRONTEND_ENDPOINT, {
		query: { userId, username },
	});

	const sendMessage = (message) => {
		if (message === "") return;
		socket.emit("send-message", { username, userId, message });
		dispatch(getMessage(username, userId, message));
	};
	useEffect(() => {
		const messageData = JSON.parse(
			window.sessionStorage.getItem("safechat-messages")
		);
		if (messageData && messageData.messages.length > 0) {
			dispatch(setMessages(messageData.messages));
		}
		socket.connect();
		socket.on("message", (messageData) => {
			if (messageData.userId !== userId) {
				dispatch(
					getMessage(
						messageData.username,
						messageData.userId,
						messageData.message
					)
				);
			}
		});
		socket.on("chat-data", (connectedSockets) => {
			dispatch(setUsers(connectedSockets));
		});

		return () => socket.close();
	}, []);
	useEffect(() => {
		if (messages !== []) {
			window.sessionStorage.setItem(
				"safechat-messages",
				JSON.stringify({ messages: messages })
			);
		}
	}, [messages]);
	return (
		<>
			{userId === null && <Redirect to="/login" />}
			<div className="ChatMain">
				<div className="ChatMain-sidebar">
					<ContentBox>
						<ChatSidebar />
					</ContentBox>
				</div>
				<div className="ChatMain-chat">
					<ContentBox>
						<div className="ChatMain-right">
							<ChatBox />
							<MessageForm sendMessage={sendMessage} />
						</div>
					</ContentBox>
				</div>
			</div>
		</>
	);
}
