import "./Input.css";

export default function Input(props) {
	const { inputId, value, onChange } = props;
	return (
		<input
			className="Input"
			id={inputId}
			value={value}
			onChange={(e) => onChange(e.target.value)}
		></input>
	);
}
