import React, { lazy, Suspense } from "react";

import Loading from "../../components/loading";
import { Link } from "react-router-dom";

const User = lazy(() => import("../../containers/user"));

const UserPage = () => (
	<Suspense fallback={<Loading />}>
		<Link to={"/"}>Back</Link>
		<User />
	</Suspense>
);

export default UserPage;
