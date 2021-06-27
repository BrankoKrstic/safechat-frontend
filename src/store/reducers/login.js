import * as actionTypes from "../actions/actionTypes";

const initialState = {
	username: null,
	userId: null,
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.LOGIN:
			return {
				username: action.username,
				userId: action.userId,
			};
		default:
			return state;
	}
};

export default reducer;
