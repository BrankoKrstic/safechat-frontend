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
		const id = window.localStorage.getItem("safechat-userId");
		const username = window.localStorage.getItem("safechat-username");
		if (id) {
			dispatch({
				type: actionTypes.LOGIN,
				username: username,
				userId: id,
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
