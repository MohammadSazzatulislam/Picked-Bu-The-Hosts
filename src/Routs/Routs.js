import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Quizzes from "../component/Quizzes/Quizzes";
import Main from "../Layout/Main";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
        element: <Home></Home>,
      },
      {
        path: "/quizzes:quizzesId",
        loader: async ({ params }) => {
          return fetch(
            `https://openapi.programming-hero.com/api/quiz/${params.quizzesId}`
          );
        },
        element: <Quizzes></Quizzes>,
      },
    ],
  },
]);
