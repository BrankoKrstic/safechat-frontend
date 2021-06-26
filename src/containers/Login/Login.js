import { useState } from "react";
import ContentBox from "../../components/ContentBox/ContentBox";
import "./Login.css";

export default function Login() {
	const [usernameState, setUsernameState] = useState("");
	return (
		<ContentBox height="100%" width="100%">
			<div className="Login">
				<form className="Login-form">
					<label for="usernameinput" className="Login-label">
						Enter Your Username
					</label>
					<input
						id="usernameinput"
						className="Login-input"
						value={usernameState}
						onChange={(e) => setUsernameState(e.target.value)}
					></input>
				</form>
			</div>
		</ContentBox>
	);
}
