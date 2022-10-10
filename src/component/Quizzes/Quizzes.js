import React from "react";
import { useLoaderData } from "react-router-dom";
import Quiz from "../Quiz/Quiz";

const Quizzes = () => {
  const data = useLoaderData();
  const quizzes = data.data;
//   console.log(quizzes);

  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 w-full mx-auto gird-cols-1">
      {quizzes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizzes;
