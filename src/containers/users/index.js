import React from "react";
import { useSelector } from "react-redux";

import List from "../../components/list";
import { selectUsers } from "../../redux/selectors/users";

const Users = () => {
	// eslint-disable-next-line no-unused-vars
	const { isLoading, errorMessage, users } = useSelector(selectUsers);
	return <List items={users} isLoading={isLoading} />;
};
export default Users;
