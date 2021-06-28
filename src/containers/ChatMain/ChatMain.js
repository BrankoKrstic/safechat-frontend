import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { io } from "socket.io-client";
import ContentBox from "../../components/ContentBox/ContentBox";
import MessageForm from "./MessageForm/MessageForm";
import ChatBox from "./ChatBox/ChatBox";
import "./ChatMain.css";

export default function ChatMain() {
	const { username, userId } = useSelector((state) => state);
	useEffect(() => {
		const socket = io("http://localhost:8080/");
		socket.on("message", (message) => {
			console.log("message");
		});
	});
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
							<MessageForm />
						</div>
					</ContentBox>
				</div>
			</div>
		</>
	);
}
