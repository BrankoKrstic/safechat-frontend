import "./FormButton.css";

export default function FormButton(props) {
	return (
		<button type="submit" className="FormButton">
			{props.text}
		</button>
	);
}
