import React from "react";

import ListItem from "../listItem";
import Loading from "../loading";

import styles from "./styles.module.css";

const List = ({ items, isLoading }) => {
	if (isLoading) {
		return <Loading />;
	}
	if (items.length === 0) {
		return <div>No items</div>;
	}
	const renderUsers = () => {
		return items.map((item) => <ListItem key={item.id} item={item} />);
	};
	return <div className={styles.wrapper}>{renderUsers()}</div>;
};

export default List;
