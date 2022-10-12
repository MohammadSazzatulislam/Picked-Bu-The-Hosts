import React from "react";
import Quiz from "../Quiz/Quiz";
import { useLoaderData } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Quizzes = () => {
  const data = useLoaderData();
  const quizName = data.data.name;
  const quizzes = data.data.questions;

  return (
    <div className="py-10 bg-slate-500">
      <ToastContainer />
      <h1 className="lg:text-5xl text-white md:text-2xl text-2xl font-semibold text-center py-5 ">
        Quiz of {quizName}
      </h1>
      {quizzes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizzes;
