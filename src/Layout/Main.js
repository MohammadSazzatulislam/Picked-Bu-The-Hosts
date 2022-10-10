import React, { createContext, } from "react";
import Headers from "../Headers/Headers";
import { Outlet, useLoaderData } from "react-router-dom";

export const QuizContext = createContext([]);

const Main = () => {

  return (
    <QuizContext.Provider value={[]}>
      <div>
        <Headers></Headers>
        <Outlet></Outlet>
      </div>
    </QuizContext.Provider>
  );
};

export default Main;
