import * as actionTypes from "./actionTypes";

export const getMessage = (username, userId, message, room) => {
	return {
		type: actionTypes.GET_MESSAGE,
		message,
		username,
		userId,
		room,
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

export const joinRoom = (room) => {
	return {
		type: actionTypes.JOIN_ROOM,
		room,
	};
};

export const addRoom = (room) => {
	return {
		type: actionTypes.ADD_ROOM,
		room,
	};
};

export const setRooms = (roomData) => {
	return {
		type: actionTypes.SET_ROOMS,
		roomData,
	};
};
