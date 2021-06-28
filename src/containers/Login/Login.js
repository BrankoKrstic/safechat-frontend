import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import { login } from "../../store/actions/login";
import { v4 as uuid } from "uuid";
import ContentBox from "../../components/ContentBox/ContentBox";
import FormInput from "../../components/FormInput/FormInput";
import FormButton from "../../components/FormButton/FormButton";
import "./Login.css";

export default function Login() {
	const [usernameState, setUsernameState] = useState("");
	const dispatch = useDispatch();
	const id = useSelector((state) => state.login.userId);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (usernameState.length === 0) return;
		const username = usernameState;
		setUsernameState("");
		const userId = uuid();
		window.localStorage.setItem(
			"safechat-loginInfo",
			JSON.stringify({ username: username, userId: userId })
		);
		dispatch(login(username, userId));
	};
	return (
		<>
			{id !== null && <Redirect to="/main" />}
			<div className="Login">
				<ContentBox>
					<div className="LoginContent">
						<form className="Login-form" onSubmit={handleSubmit}>
							<label
								htmlFor="usernameinput"
								className="Login-label"
							>
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
		</>
	);
}
