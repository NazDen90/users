import React, { lazy, Suspense } from "react";
import { Link } from "react-router-dom";

import Loading from "../../components/loading";

const User = lazy(() => import("../../containers/user"));

const UserPage = () => (
	<Suspense fallback={<Loading />}>
		<Link style={{ margin: "10px" }} to={"/"}>
			Back
		</Link>
		<User />
	</Suspense>
);

export default UserPage;
