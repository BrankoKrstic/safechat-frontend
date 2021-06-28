import * as actionTypes from "./actionTypes";

export const sendMessage = (message, userId, username) => {
	return {
		type: actionTypes.SEND_MESSAGE,
		username,
		userId,
	};
};
