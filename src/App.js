import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUsers } from "./redux/actions/usersActions";

import UsersPage from "./pages/users";
import UserPage from "./pages/user";

import "./App.css";

function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(getUsers(100));
	}, [dispatch]);

	return (
		<div className="App">
			<BrowserRouter>
				<Switch>
					<Route exact path={"/"} component={UsersPage} />
					<Route path={"/:id"} component={UserPage} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}

export default App;
