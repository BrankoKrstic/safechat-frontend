import "./UserWidget.css";

export default function UserWidget(props) {
	return (
		<div className={props.isEven ? "UserWidget" : "UserWidget Even"}>
			<div className="UserWidget-online"></div>
			{props.username}
		</div>
	);
}
