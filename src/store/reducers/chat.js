import * as actionTypes from "../actions/actionTypes";

const initialState = {
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
		default:
			return state;
	}
};

export default reducer;
