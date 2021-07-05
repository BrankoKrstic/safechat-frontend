import { useSelector } from "react-redux";
import UserWidget from "../ChatSidebar/UserWidget/UserWidget";

const regexExp =
	/^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/gi;

export default function ChatRooms(props) {
	const { rooms, currentRoom } = useSelector((state) => state.chat);
	const chats = () => {
		const chatComponents = [];
		let i = 1;
		for (let chat of rooms) {
			if (chat !== "null" && !regexExp.test(chat))
				chatComponents.push(
					<UserWidget
						key={chat}
						isCurrent={currentRoom === chat}
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
				isCurrent={currentRoom === ""}
				name="Global"
				clicked={() => props.setRoom("")}
			/>
			{chats()}
		</>
	);
}
