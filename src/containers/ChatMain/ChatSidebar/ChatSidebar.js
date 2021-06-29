import { useSelector } from "react-redux";
import UserWidget from "./UserWidget/UserWidget";
import "./ChatSidebar.css";

export default function ChatSidebar() {
	const userData = useSelector((state) => state.chat.users);
	const users = () => {
		const userComponents = [];
		let i = 1;
		for (let id in userData) {
			if (id !== "null")
				userComponents.push(
					<UserWidget
						key={id}
						isEven={i % 2 === 0}
						username={userData[id]}
					/>
				);
			i++;
		}
		return userComponents;
	};
	return (
		<>
			<div className="ChatSidebar-header">Participants</div>
			<div className="ChatSidebar-main">{users()}</div>
		</>
	);
}
