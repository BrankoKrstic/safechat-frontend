import "./FormInput.css";

export default function FormInput(props) {
	const { inputId, value, onChange } = props;
	return (
		<input
			className="FormInput"
			id={inputId}
			value={value}
			placeholder={props.placeholder}
			onChange={(e) => onChange(e.target.value)}
		></input>
	);
}
