import "./Modal.css";

export default function Modal(props) {
	return (
		<div
			className={`Modal ${
				props.showing ? "Modal-showing" : "Modal-hidden"
			}`}
			onClick={props.clicked}
		>
			{props.children}
		</div>
	);
}
