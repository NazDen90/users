import React, { lazy, Suspense } from "react";
import Loading from "../../components/loading";

const Users = lazy(() => import("../../containers/users"));

const UsersPage = () => (
	<Suspense fallback={<Loading />}>
		<Users />
	</Suspense>
);

export default UsersPage;
