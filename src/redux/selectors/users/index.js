export const select = (state) => state.users;

export const selectUsers = (state) => {
	const userState = select(state);
	let users = userState.users;
	if (users.length === 0) {
		return userState;
	}
	users = users.map((user) => ({
		id: user.id,
		login: user.login,
		avatarUrl: user["avatar_url"],
		profileLink: user["html_url"].split(":")[1],
	}));
	return { ...userState, users: users };
};
