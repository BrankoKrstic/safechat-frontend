import { useState } from "react";
import Modal from "../UI/Modal/Modal";
import FormInput from "../FormInput/FormInput";
import FormButton from "../FormButton/FormButton";
import "./NewRoomDialog.css";

export default function NewRoomDialog(props) {
	const [newRoomFormState, setNewRoomFormState] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
		if (newRoomFormState === "") return;
		const roomName = newRoomFormState;
		setNewRoomFormState("");
		props.setRoom(roomName);
		props.toggleDialogOpen();
	};
	return (
		<Modal showing clicked={props.toggleDialogOpen}>
			<div className="NewRoomDialog" onClick={(e) => e.stopPropagation()}>
				<label htmlFor="NewRoomInput">Enter Room Name:</label>
				<form onSubmit={handleSubmit}>
					<FormInput
						inputId="NewRoomInput"
						value={newRoomFormState}
						placeholder="Room Name"
						onChange={setNewRoomFormState}
					/>
					<FormButton text="Create Room" />
				</form>
			</div>
		</Modal>
	);
}
