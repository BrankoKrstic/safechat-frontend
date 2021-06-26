import Login from "../Login/Login";
import { Switch, Route, Redirect } from "react-router-dom";
import "./SafeChat.css";

export default function SafeChat() {
	return (
		<div className="SafeChat">
			<Switch>
				<Route path="/login">
					<Login />
				</Route>
				<Route path="/main">
					<div>Main Chat</div>
				</Route>
				<Route path="/">
					<Redirect to="/login" />
				</Route>
			</Switch>
		</div>
	);
}
