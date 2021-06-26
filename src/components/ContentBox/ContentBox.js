import "./ContentBox.css";

export default function ContentBox(props) {
	return (
		<div
			style={{ width: props.width, height: props.height }}
			className="ContentBox"
		>
			{props.children}
		</div>
	);
}
