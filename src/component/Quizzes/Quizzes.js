import React from "react";
import Quiz from "../Quiz/Quiz";
import { useLoaderData } from "react-router-dom";

const Quizzes = () => {
  const data = useLoaderData();
  const quizName = data.data.name;
  const quizzes = data.data.questions;

  return (
    <div className="py-10">
      <h1 className="lg:text-5xl md:text-2xl text-xl font-semibold text-center py-5 ">
        Quiz of {quizName}
      </h1>
      {quizzes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizzes;
