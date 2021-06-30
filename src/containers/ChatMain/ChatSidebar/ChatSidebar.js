import "./ChatSidebar.css";
import ContentBox from "../../../components/ContentBox/ContentBox";

export default function ChatSidebar(props) {
	return (
		<ContentBox>
			<div className="ChatSidebar-header">{props.headerText}</div>
			<div className="ChatSidebar-main">{props.children}</div>
		</ContentBox>
	);
}
