import instance from "../../../utils/users.api";

export const GET_USER_START = "GET_USER_START";
export const GET_USER_SUCCESS = "GET_USER_SUCCESS";
export const GET_USER_ERROR = "GET_USER_ERROR";

const getUserStart = () => ({
	type: GET_USER_START,
});

const getUserSuccess = (payload) => ({
	type: GET_USER_SUCCESS,
	payload,
});

const getUserError = (payload) => ({
	type: GET_USER_ERROR,
	payload,
});

export const getUser = (id) => async (dispatch) => {
	dispatch(getUserStart());
	try {
		const { data } = await instance.get(`/users/${id}`);
		dispatch(getUserSuccess(data));
	} catch (error) {
		dispatch(getUserError(error));
	}
};
