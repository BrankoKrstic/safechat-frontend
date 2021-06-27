import * as actionTypes from "./actionTypes";

export const login = (username, userId) => {
	return {
		type: actionTypes.LOGIN,
		username: username,
		userId: userId,
	};
};
