import * as actionTypes from "../actions/actionTypes";

const initialState = {
	users: {},
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
		case actionTypes.SET_USERS:
			return {
				...state,
				users: { ...action.userdata },
			};
		default:
			return state;
	}
};

export default reducer;
