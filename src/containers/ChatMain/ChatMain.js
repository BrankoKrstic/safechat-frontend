import ContentBox from "../../components/ContentBox/ContentBox";
import MessageForm from "./MessageForm/MessageForm";
import ChatBox from "./ChatBox/ChatBox";
import "./ChatMain.css";

export default function ChatMain() {
	return (
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
	);
}
