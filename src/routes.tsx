import { RouteObject } from "react-router-dom";
import Transactions from "./pages/Transactions";
import Account from "./pages/Account";

const routes: RouteObject[] = [
  { path: "/", element: <Transactions /> },
  { path: "/transactions", element: <Transactions /> },
  { path: "/account", element: <Account /> },
];

export default routes;
