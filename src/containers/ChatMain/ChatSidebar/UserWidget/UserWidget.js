import "./UserWidget.css";

export default function UserWidget(props) {
	return (
		<div
			onClick={props.clicked}
			className={props.isEven ? "UserWidget" : "UserWidget Even"}
		>
			<div className="UserWidget-online"></div>
			{props.name}
		</div>
	);
}
