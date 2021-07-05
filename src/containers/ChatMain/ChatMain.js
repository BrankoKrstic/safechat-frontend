import { Redirect } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect, useMemo } from "react";
import useToggleState from "../../hooks/useToggleState";
import {
	getMessage,
	setUsers,
	setMessages,
	joinRoom,
	setRooms,
} from "../../store/actions/chat";
import { io } from "socket.io-client";
import Sidebar from "../../components/Sidebar/Sidebar";
import SidebarDrawer from "../../components/SidebarDrawer/SidebarDrawer";
import ContentBox from "../../components/ContentBox/ContentBox";
import ChatNav from "../../components/ChatNav/ChatNav";
import MessageForm from "./MessageForm/MessageForm";
import ChatBox from "./ChatBox/ChatBox";
import NewRoomDialog from "../../components/NewRoomDialog/NewRoomDialog";
import "./ChatMain.css";

export default function ChatMain() {
	const { username, userId } = useSelector((state) => state.login);
	const { messages, currentRoom, joinedRooms } = useSelector(
		(state) => state.chat
	);
	const dispatch = useDispatch();
	const [dialogOpen, toggleDialogOpen] = useToggleState(false);
	const [drawerOpen, toggleDrawerOpen] = useToggleState(false);
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
	const socket = useMemo(
		() =>
			io(process.env.REACT_APP_FRONTEND_ENDPOINT, {
				query: { userId, username },
			}),
		[userId, username]
	);
	useEffect(() => {
		const messageData = JSON.parse(
			window.sessionStorage.getItem("safechat-messages")
		);
		if (messageData && messageData.messages.length > 0) {
			dispatch(setMessages(messageData.messages));
		}
		socket.on("message", (messageData) => {
			if (messageData.userId === userId) return;
			if (messageData.room === userId) {
				messageData.room = messageData.userId;
			}
			let message = messageData.message;
			fetch(`/.netlify/functions/decrypt-message?message="${message}"`)
				.then((res) => res.json())
				.then((data) => {
					let decryptedMessage = data.message;
					decryptedMessage = decryptedMessage.substring(
						1,
						decryptedMessage.length - 1
					);
					dispatch(
						getMessage(
							messageData.username,
							messageData.userId,
							decryptedMessage,
							messageData.room
						)
					);
				});
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
	const sendMessage = (message) => {
		if (message === "") return;
		fetch(`/.netlify/functions/encrypt-message?message="${message}"`)
			.then((res) => res.json())
			.then((data) => {
				let encryptedMessage = data.message;
				socket.emit(
					"send-message",
					{
						username,
						userId,
						message: encryptedMessage,
						room: currentRoom,
					},
					currentRoom
				);
			});

		dispatch(getMessage(username, userId, message, currentRoom));
	};
	return (
		<>
			{userId === null && <Redirect to="/login" />}
			<ChatNav navControl={toggleDrawerOpen} />
			<div className="ChatMain">
				<SidebarDrawer
					toggleDrawerOpen={toggleDrawerOpen}
					drawerOpen={drawerOpen}
				>
					<Sidebar
						setRoom={setRoom}
						toggleDialogOpen={toggleDialogOpen}
					/>
				</SidebarDrawer>
				<div className="ChatMain-sidebar-container">
					<Sidebar
						setRoom={setRoom}
						toggleDialogOpen={toggleDialogOpen}
					/>
				</div>
				<div className="ChatMain-chat">
					<ContentBox>
						<div className="ChatMain-right">
							<ChatBox />
							<MessageForm sendMessage={sendMessage} />
						</div>
					</ContentBox>
				</div>
				{dialogOpen && (
					<NewRoomDialog
						toggleDialogOpen={toggleDialogOpen}
						setRoom={setRoom}
					/>
				)}
			</div>
		</>
	);
}
