import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import Quizzes from "../component/Quizzes/Quizzes";
import ErrorPage from "../ErrorPage/ErrorPage";
import OverView from "../component/OverView/OverView";
import Blog from "../component/Blog/Blog";
import { LoadData, quizzes } from "../component/Loader/Loader";

export const router = createBrowserRouter([
  {
    path: "/",
    loader: LoadData,
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },

      {
        path: "/quizzes/:id",
        loader: quizzes,
        element: <Quizzes></Quizzes>,
      },
      {
        path: "/overview",
        element: <OverView></OverView>,
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
    ],
  },
]);
