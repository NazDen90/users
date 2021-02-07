import React from "react";
import { Link } from "react-router-dom";

import styles from "./styles.module.css";

const Field = ({ data, link, label, grid }) => {
	if (link) {
		return (
			<Link style={{ width: "min-content" }} target={"_blank"} to={link}>
				{data}
			</Link>
		);
	}
	return (
		<div style={grid ? { gridArea: grid } : null} className={styles.wrapper}>
			{label && <div className={styles.label}>{label}</div>}
			<div>{data ?? "No info"}</div>
		</div>
	);
};

export default Field;
