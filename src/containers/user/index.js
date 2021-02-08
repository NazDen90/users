import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import { selectUser } from "../../redux/selectors/user";
import { getUser } from "../../redux/actions/userActions";

import Loading from "../../components/loading";
import Avatar from "../../components/UI/avatar";
import Field from "../../components/UI/field";

import styles from "./styles.module.css";

const User = () => {
	const { id } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	useEffect(() => {
		dispatch(getUser(id));
	}, [dispatch, id]);

	// eslint-disable-next-line no-unused-vars
	const { isLoading, user, errorMessage } = useSelector(selectUser);
	if (isLoading) {
		return <Loading />;
	}
	if (!user) {
		return <div>No user</div>;
	}
	return (
		<div className={styles.wrapper}>
			{Object.keys(user).map((key) => {
				if (key === "avatarUrl") {
					return <Avatar key={key} url={user[key]} grid={key} size={300} />;
				}
				if (key === "blog") {
					return <Field key={key} grid={key} data={key} link={user[key]} />;
				}
				return <Field key={key} grid={key} data={user[key]} label={key} />;
			})}
		</div>
	);
};
export default User;
