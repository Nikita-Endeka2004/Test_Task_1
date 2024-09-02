import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import ErrorPage from "../pages/ErrorPage";
import Home, { userLoader } from "../pages/Home";

export const router = createBrowserRouter([
  {
    path: '/Test_Task_1/',
    element: <Layout/>,
    errorElement: <ErrorPage/>,
    children: [
      {
        index: true,
        element: <Home />,
        loader: userLoader,
      },
    ]
  }
])