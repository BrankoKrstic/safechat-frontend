import { useState } from "react";
import FormInput from "../../../components/FormInput/FormInput";
import FormButton from "../../../components/FormButton/FormButton";
import "./MessageForm.css";

export default function MessageForm() {
	const [messageState, setMessageState] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<form className="MessageForm" onSubmit={handleSubmit}>
			<FormInput
				placeholder="Type a message"
				value={messageState}
				onChange={setMessageState}
			/>
			<FormButton text="Send" />
		</form>
	);
}
