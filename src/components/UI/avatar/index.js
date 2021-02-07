import React from "react";

const Avatar = ({ url, size, grid }) => (
	<img
		style={grid ? { borderRadius: size, gridArea: grid } : { borderRadius: size }}
		width={size}
		height={size}
		src={url}
		alt=""
	/>
);

export default Avatar;
