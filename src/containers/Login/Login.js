import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Redirect } from "react-router-dom";
import * as actionTypes from "../../store/actions/actionTypes";
import { v4 as uuid } from "uuid";
import ContentBox from "../../components/ContentBox/ContentBox";
import FormInput from "../../components/FormInput/FormInput";
import FormButton from "../../components/FormButton/FormButton";
import "./Login.css";

export default function Login() {
	const [usernameState, setUsernameState] = useState("");
	const dispatch = useDispatch();
	const userId = useSelector((state) => state.userId);
	const handleSubmit = (e) => {
		e.preventDefault();
		if (usernameState.length === 0) return;
		const username = usernameState;
		setUsernameState("");
		const id = uuid();
		window.localStorage.setItem("safechat-username", username);
		window.localStorage.setItem("safechat-userId", id);
		dispatch({ type: actionTypes.LOGIN, username, userId: id });
	};
	let loginPage = (
		<div className="Login">
			<ContentBox>
				<div className="LoginContent">
					<form className="Login-form" onSubmit={handleSubmit}>
						<label htmlFor="usernameinput" className="Login-label">
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
	if (userId !== null) {
		loginPage = <Redirect to="/main" />;
	}

	return loginPage;
}
