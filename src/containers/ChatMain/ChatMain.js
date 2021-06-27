import ContentBox from "../../components/ContentBox/ContentBox";
import "./ChatMain.css";

export default function ChatMain() {
	return (
		<div className="ChatMain">
			<div className="ChatMain-sidebar">
				<ContentBox></ContentBox>
			</div>
			<div className="ChatMain-chatbox">
				<ContentBox></ContentBox>
			</div>
		</div>
	);
}
