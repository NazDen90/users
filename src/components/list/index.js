import React from "react";

import Loading from "../loading";
import ListItem from "../listItem";

import styles from "./styles.module.css";

const List = ({ items, isLoading }) => {
	if (isLoading) {
		return <Loading />;
	}
	if (items.length === 0) {
		return <div>No items</div>;
	}
	return (
		<div className={styles.wrapper}>
			{items.map((item) => (
				<ListItem key={item.id} item={item} />
			))}
		</div>
	);
};

export default List;
