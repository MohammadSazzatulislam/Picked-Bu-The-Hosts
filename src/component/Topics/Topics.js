import React from "react";
import { useLoaderData } from "react-router-dom";
import Topic from "../Topic/Topic";

const Topics = () => {
  const data = useLoaderData();
  const topics = data.data;


  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-5 w-full mx-auto gird-cols-1">
      {topics.map((quiz) => (
        <Topic key={quiz.id} quiz={quiz}></Topic>
      ))}
    </div>
  );
};

export default Topics;
