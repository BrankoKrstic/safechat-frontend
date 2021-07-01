import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import useToggleState from "../../hooks/useToggleState";
import { io } from "socket.io-client";
import {
	getMessage,
	setUsers,
	setMessages,
	joinRoom,
	setRooms,
} from "../../store/actions/chat";
import ContentBox from "../../components/ContentBox/ContentBox";
import MessageForm from "./MessageForm/MessageForm";
import ChatBox from "./ChatBox/ChatBox";
import ChatSidebar from "./ChatSidebar/ChatSidebar";
import ChatParticipants from "./ChatParticipants/ChatParticipants";
import ChatRooms from "./ChatRooms/ChatRooms";
import NewRoomDialog from "../../components/NewRoomDialog/NewRoomDialog";
import "./ChatMain.css";

export default function ChatMain() {
	const { username, userId } = useSelector((state) => state.login);
	const { messages, currentRoom, joinedRooms } = useSelector(
		(state) => state.chat
	);
	const dispatch = useDispatch();
	const socket = io(process.env.REACT_APP_FRONTEND_ENDPOINT, {
		query: { userId, username },
	});
	const [dialogOpen, toggleDialogOpen] = useToggleState(false);
	const sendMessage = (message) => {
		if (message === "") return;
		socket.emit(
			"send-message",
			{
				username,
				userId,
				message,
				room: currentRoom,
			},
			currentRoom
		);
		dispatch(getMessage(username, userId, message, currentRoom));
	};
	const setRoom = (room) => {
		if (room === userId) return;
		if (joinedRooms.includes(room)) {
			dispatch(joinRoom(room));
		} else {
			socket.emit("join-room", room, () => {
				dispatch(joinRoom(room));
			});
		}
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
			if (messageData.userId === userId) return;
			if (messageData.room === userId) {
				messageData.room = messageData.userId;
			}
			dispatch(
				getMessage(
					messageData.username,
					messageData.userId,
					messageData.message,
					messageData.room
				)
			);
		});
		socket.on("chat-data", (connectedSockets, activeRooms) => {
			dispatch(setUsers(connectedSockets));
			dispatch(setRooms(activeRooms));
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
			{dialogOpen && (
				<NewRoomDialog
					toggleDialogOpen={toggleDialogOpen}
					setRoom={setRoom}
				/>
			)}
			<div className="ChatMain">
				<div className="ChatMain-sidebar">
					<div className="ChatMain-sidebar-inner">
						<ChatSidebar headerText="Participants">
							<ChatParticipants setRoom={setRoom} />
						</ChatSidebar>
					</div>
					<div className="ChatMain-sidebar-inner">
						<ChatSidebar headerText="Chats">
							<ChatRooms setRoom={setRoom} />
						</ChatSidebar>
					</div>
					<button
						className="New-room-button"
						onClick={toggleDialogOpen}
					>
						Add Room
					</button>
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
