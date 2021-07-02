import ChatSidebar from "../../containers/ChatMain/ChatSidebar/ChatSidebar";
import ChatParticipants from "../../containers/ChatMain/ChatParticipants/ChatParticipants";
import ChatRooms from "../../containers/ChatMain/ChatRooms/ChatRooms";

import "./Sidebar.css";

export default function Sidebar(props) {
	const { setRoom, toggleDialogOpen } = props;
	return (
		<>
			<div className="Sidebar-inner">
				<ChatSidebar headerText="Participants">
					<ChatParticipants setRoom={setRoom} />
				</ChatSidebar>
			</div>
			<div className="Sidebar-inner">
				<ChatSidebar headerText="Rooms">
					<ChatRooms setRoom={setRoom} />
				</ChatSidebar>
			</div>
			<button className="Sidebar-button" onClick={toggleDialogOpen}>
				Add Room
			</button>
		</>
	);
}
