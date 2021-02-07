import instance from "../../../utils/users.api";

export const GET_USERS_START = "GET_USERS_START";
export const GET_USERS_SUCCESS = "GET_USERS_SUCCESS";
export const GET_USERS_ERROR = "GET_USERS_ERROR";

const getUsersStart = () => ({
	type: GET_USERS_START,
});

const getUsersSuccess = (payload) => ({
	type: GET_USERS_SUCCESS,
	payload,
});

const getUsersError = (payload) => ({
	type: GET_USERS_ERROR,
	payload,
});

export const getUsers = (perPage = null, since = null) => async (dispatch) => {
	dispatch(getUsersStart());
	try {
		const { data } = await instance.get("/users", {
			params: { per_page: perPage, since },
		});
		dispatch(getUsersSuccess(data));
	} catch (error) {
		dispatch(getUsersError(error));
	}
};
