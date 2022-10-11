import { createBrowserRouter } from "react-router-dom";
import Home from "../component/Home/Home";
import Main from "../Layout/Main";
import  Quizzes  from "../component/Quizzes/Quizzes";
import ErrorPage from "../ErrorPage/ErrorPage";
import OverView from "../component/OverView/OverView";
import Blog from "../component/Blog/Blog";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        loader: async()=> fetch('https://openapi.programming-hero.com/api/quiz'),
        element: <Home></Home>,
      },
      {
        path: '/quizzes/:id',
        loader: async ({ params}) => {
         return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`);
        },
        element: <Quizzes></Quizzes> ,
      },
      {
        path: '/overview',
        element: <OverView></OverView>
      },
      {
        path: '/blog',
        element: <Blog></Blog>
      }
      
    ],
  },
]);
