import { useState } from "react";
import { uuid } from "uuidv4";
import ContentBox from "../../components/ContentBox/ContentBox";
import Input from "../../components/Input/Input";
import "./Login.css";

export default function Login() {
	const [usernameState, setUsernameState] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<ContentBox height="100%" width="100%">
			<div className="Login">
				<form className="Login-form" onSubmit={handleSubmit}>
					<label for="usernameinput" className="Login-label">
						Enter Your Username
					</label>
					<Input
						inputId="usernameinput"
						className="Login-input"
						value={usernameState}
						onChange={setUsernameState}
					></Input>
				</form>
			</div>
		</ContentBox>
	);
}
