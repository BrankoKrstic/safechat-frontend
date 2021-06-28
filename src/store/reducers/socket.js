import * as actionTypes from "../actions/actionTypes";

const initialState = {
	messages: [],
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.SEND_MESSAGE:
			return {
				username: action.username,
				userId: action.userId,
			};
		default:
			return state;
	}
};
