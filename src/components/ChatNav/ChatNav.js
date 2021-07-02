import "./ChatNav.css";

export default function ChatNav(props) {
	return (
		<div className="ChatNav">
			<div className="ChatNav-logo">SafeChat</div>
			<button
				onClick={props.navControl}
				className="ChatNav-button"
			></button>
		</div>
	);
}
