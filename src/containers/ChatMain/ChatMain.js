import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { io } from "socket.io-client";
import { getMessage } from "../../store/actions/message";
import ContentBox from "../../components/ContentBox/ContentBox";
import MessageForm from "./MessageForm/MessageForm";
import ChatBox from "./ChatBox/ChatBox";
import "./ChatMain.css";

export default function ChatMain() {
	const { username, userId } = useSelector((state) => state.login);
	const dispatch = useDispatch();
	const socket = io("http://localhost:8080/", {
		query: { id: userId },
	});
	socket.on("message", (message) => {
		console.log("message");
	});
	useEffect(() => {
		socket.connect();
		return () => socket.close();
	}, [socket]);
	const sendMessage = (message) => {
		dispatch(getMessage(username, userId, message));
		socket.emit("send-message", { message });
	};
	return (
		<>
			{userId === null && <Redirect to="/login" />}
			<div className="ChatMain">
				<div className="ChatMain-sidebar">
					<ContentBox>
						<div className="Sidebar-header">Participants</div>
						<div className="Sidebar-main"></div>
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
