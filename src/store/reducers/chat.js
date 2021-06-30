import * as actionTypes from "../actions/actionTypes";

const initialState = {
	users: {},
	rooms: [],
	messages: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.GET_MESSAGE:
			return {
				...state,
				messages: [
					...state.messages,
					{
						username: action.username,
						userId: action.userId,
						message: action.message,
					},
				],
			};
		case actionTypes.SET_MESSAGES:
			return {
				...state,
				messages: [...action.messageData],
			};
		case actionTypes.SET_USERS:
			return {
				...state,
				users: { ...action.userdata },
			};
		case actionTypes.JOIN_ROOM:
			return {
				...state,
				rooms: [...state.rooms, action.newRoom],
			};
		case actionTypes.SET_ROOMS:
			return {
				...state,
				rooms: action.roomData,
			};
		default:
			return state;
	}
};

export default reducer;
