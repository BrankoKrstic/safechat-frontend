import { useState } from "react";
import { uuid } from "uuidv4";
import ContentBox from "../../components/ContentBox/ContentBox";
import FormInput from "../../components/FormInput/FormInput";
import FormButton from "../../components/FormButton/FormButton";
import "./Login.css";

export default function Login() {
	const [usernameState, setUsernameState] = useState("");
	const handleSubmit = (e) => {
		e.preventDefault();
	};
	return (
		<div className="Login">
			<ContentBox>
				<div className="LoginContent">
					<form className="Login-form" onSubmit={handleSubmit}>
						<label for="usernameinput" className="Login-label">
							Enter Your Username
						</label>
						<FormInput
							inputId="usernameinput"
							className="Login-input"
							value={usernameState}
							onChange={setUsernameState}
						></FormInput>
						<FormButton text="LOG IN" />
					</form>
				</div>
			</ContentBox>
		</div>
	);
}
