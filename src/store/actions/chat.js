import * as actionTypes from "./actionTypes";

export const getMessage = (username, userId, message) => {
	return {
		type: actionTypes.GET_MESSAGE,
		message,
		username,
		userId,
	};
};

export const joinUser = (username, userId) => {
	return {
		type: actionTypes.JOIN_USER,
		username,
		userId,
	};
};
