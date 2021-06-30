import { useSelector } from "react-redux";
import UserWidget from "../ChatSidebar/UserWidget/UserWidget";

export default function ChatRooms(props) {
	const chatData = useSelector((state) => state.chat.rooms);
	const chats = () => {
		const chatComponents = [];
		let i = 1;
		for (let chat of chatData) {
			if (chat !== "null")
				chatComponents.push(
					<UserWidget
						key={chat}
						isEven={i % 2 === 0}
						name={chat}
						clicked={() => props.setRoom(chat)}
					/>
				);
			i++;
		}
		return chatComponents;
	};
	return (
		<>
			<UserWidget
				key="global"
				isEven={true}
				name="Global"
				clicked={() => props.setRoom("chat")}
			/>
			{chats()}
		</>
	);
}
