import "./UserWidget.css";

export default function UserWidget(props) {
	return (
		<div
			onClick={props.clicked}
			className={`UserWidget ${props.isEven && "Even"} ${
				props.isCurrent && "Current"
			}`}
		>
			<div className="UserWidget-online"></div>
			{props.name}
		</div>
	);
}
