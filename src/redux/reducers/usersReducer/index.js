import { GET_USERS_ERROR, GET_USERS_START, GET_USERS_SUCCESS } from "../../actions/usersActions";

const initialState = {
	isLoading: false,
	errorMessage: "",
	users: [],
};

export const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USERS_START:
			return { ...state, isLoading: true };
		case GET_USERS_SUCCESS:
			return { ...state, isLoading: false, users: action.payload, errorMessage: "" };
		case GET_USERS_ERROR:
			return { ...state, isLoading: false, errorMessage: action.payload };
		default:
			return state;
	}
};
