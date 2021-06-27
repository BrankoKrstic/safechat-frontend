import "./FormInput.css";

export default function FormInput(props) {
	const { inputId, value, onChange } = props;
	return (
		<input
			className="FormInput"
			id={inputId}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		></input>
	);
}
