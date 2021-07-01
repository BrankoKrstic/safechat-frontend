import { useState } from "react";

const useToggleState = (boolean) => {
	const [state, setState] = useState(boolean);
	const toggle = () => {
		setState(!state);
	};
	return [state, toggle];
};

export default useToggleState;
