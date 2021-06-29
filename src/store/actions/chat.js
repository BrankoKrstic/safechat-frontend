import * as actionTypes from "./actionTypes";

export const getMessage = (username, userId, message) => {
	return {
		type: actionTypes.GET_MESSAGE,
		message,
		username,
		userId,
	};
};

export const setUsers = (userdata) => {
	return {
		type: actionTypes.SET_USERS,
		userdata,
	};
};

export const setMessages = (messageData) => {
	return {
		type: actionTypes.SET_MESSAGES,
		messageData,
	};
};
