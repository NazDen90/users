import React from "react";

import Avatar from "../UI/avatar";
import Field from "../UI/field";

import styles from "./styles.module.css";
import { useHistory } from "react-router-dom";

const ListItem = ({ item }) => {
	const history = useHistory();

	const itemClickHandler = () => {
		history.push(`/${login}`);
	};

	const { avatarUrl, login, profileLink } = item;
	return (
		<div onClick={itemClickHandler} className={styles.wrapper}>
			<Avatar url={avatarUrl} size={100} />
			<Field data={login} link={profileLink} />
		</div>
	);
};
export default ListItem;
