import { useEffect } from "react";
import Login from "../Login/Login";
import ChatMain from "../ChatMain/ChatMain";
import { useDispatch } from "react-redux";
import * as actionTypes from "../../store/actions/actionTypes";
import { Switch, Route, Redirect } from "react-router-dom";
import "./SafeChat.css";

export default function SafeChat() {
	const dispatch = useDispatch();
	useEffect(() => {
		const loginData = window.localStorage.getItem("safechat-loginInfo");
		if (loginData) {
			const { username, userId } = JSON.parse(loginData);
			dispatch({
				type: actionTypes.LOGIN,
				username,
				userId,
			});
		}
	}, []);
	return (
		<div className="SafeChat">
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/main">
					<ChatMain />
				</Route>
				<Route path="/">
					<Redirect to="/login" />
				</Route>
			</Switch>
		</div>
	);
}
