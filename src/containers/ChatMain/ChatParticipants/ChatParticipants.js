import { useSelector } from "react-redux";
import UserWidget from "../ChatSidebar/UserWidget/UserWidget";

export default function ChatParticipants(props) {
	const { users, currentRoom } = useSelector((state) => state.chat);
	const { userId, username } = useSelector((state) => state.login);
	const userElements = () => {
		const userComponents = [];
		let i = 1;
		for (let id in users) {
			if (id !== "null" && id !== userId)
				userComponents.push(
					<UserWidget
						key={id}
						isCurrent={currentRoom === id}
						isEven={i % 2 === 0}
						name={users[id]}
						clicked={() => props.setRoom(id)}
					/>
				);
			i++;
		}
		return userComponents;
	};
	return (
		<>
			<UserWidget
				key={userId}
				isCurrent={false}
				isEven={false}
				name={username}
				clicked={null}
			/>
			{userElements()}
		</>
	);
}
