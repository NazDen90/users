import { GET_USER_ERROR, GET_USER_START, GET_USER_SUCCESS } from "../../actions/userActions";

const initialState = {
	isLoading: false,
	errorMessage: "",
	user: null,
};

export const userReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_USER_START:
			return { ...state, isLoading: true };
		case GET_USER_SUCCESS:
			return { ...state, isLoading: false, user: action.payload, errorMessage: "" };
		case GET_USER_ERROR:
			return { ...state, isLoading: false, errorMessage: action.payload };
		default:
			return state;
	}
};
