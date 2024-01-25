import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Product, Shop, SignIn, SignUp, Contact, Error } from "./pages";
import { NotificationBar } from "./components";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<>
				<Home />
			</>
		),
		errorElement: <Error />,
	},
	{
		path: "/sign-up",
		element: <SignUp />,
	},
	{
		path: "/sign-in",
		element: <SignIn />,
	},
	{
		path: "/product",
		element: (
			<>
				<NotificationBar />
				<Product />
			</>
		),
	},
	{
		path: "/shop",
		element: (
			<>
				<NotificationBar />
				<Shop />
			</>
		),
	},
	{
		path: "/contact",
		element: <Contact />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
