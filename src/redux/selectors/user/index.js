export const select = (state) => state.user;

export const selectUser = (state) => {
	const userState = select(state);
	let user = userState.user;
	if (!user) {
		return userState;
	}
	user = {
		followers: user.followers,
		following: user.following,
		avatarUrl: user["avatar_url"],
		name: user.name,
		bio: user.bio,
		createdAt: new Date(user.created_at).toDateString(),
		company: user.company,
		email: user.email,
		blog: user.blog ? user.blog.replace("https:", "") : user.blog,
	};

	return { ...userState, user: user };
};
