import {RouteObject } from "react-router-dom";
import Transactions from "./pages/Transactions";
import Account from "./pages/Account";
import Layout from "./components/Layout";

const routes: RouteObject[] = [
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Transactions /> },
      { path: "/transactions", element: <Transactions /> },
      { path: "/account", element: <Account /> },
    ],
  },
];

export default routes;
