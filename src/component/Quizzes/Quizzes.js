import React from "react";
import Quiz from "../Quiz/Quiz";
import { useLoaderData } from "react-router-dom";

const Quizzes = () => {
  const data = useLoaderData();
  const quizName = data.data.name;
  const quizzes = data.data.questions;

  return (
    <div
      className="py-10"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1617791160536-598cf32026fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NzV8fGFuaW1hdGlvbiUyMGFydHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60")`, backgroundRepeat: 'no-repeat',backgroundSize:'cover',
      }}
    >
      <h1 className="lg:text-5xl text-white md:text-2xl text-xl font-semibold text-center py-5 ">
        Quiz of {quizName}
      </h1>
      {quizzes.map((quiz) => (
        <Quiz key={quiz.id} quiz={quiz}></Quiz>
      ))}
    </div>
  );
};

export default Quizzes;
