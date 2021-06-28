import * as actionTypes from "./actionTypes";

export const getMessage = (username, userId, message) => {
	return {
		type: actionTypes.GET_MESSAGE,
		message,
		username,
		userId,
	};
};
