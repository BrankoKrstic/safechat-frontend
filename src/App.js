import SafeChat from "./containers/SafeChat/SafeChat";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

function App() {
	return (
		<Router>
			<div className="App">
				<SafeChat />
			</div>
		</Router>
	);
}

export default App;
