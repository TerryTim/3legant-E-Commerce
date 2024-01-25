import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Home, Product, Shop, SignIn, SignUp, Contact, Error } from "./pages";
import { NotificationBar } from "./components";

const router = createBrowserRouter([
	{
		path: "/3legant-E-Commerce/",
		element: (
			<>
				<Home />
			</>
		),
		errorElement: <Error />,
	},
	{
		path: "/3legant-E-Commerce/sign-up",
		element: <SignUp />,
	},
	{
		path: "/3legant-E-Commerce/sign-in",
		element: <SignIn />,
	},
	{
		path: "/3legant-E-Commerce/product",
		element: (
			<>
				<NotificationBar />
				<Product />
			</>
		),
	},
	{
		path: "/3legant-E-Commerce/shop",
		element: (
			<>
				<NotificationBar />
				<Shop />
			</>
		),
	},
	{
		path: "/3legant-E-Commerce/contact",
		element: <Contact />,
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
