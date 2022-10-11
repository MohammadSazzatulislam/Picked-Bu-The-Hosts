import Headers from "../Headers/Headers";
import { Outlet, useLoaderData } from "react-router-dom";
import { createContext } from "react";

export const TopicContext = createContext([]);

const Main = () => {
  const topic = useLoaderData();
  return (
    <TopicContext.Provider value={topic}>
      <Headers></Headers>
      <Outlet></Outlet>
    </TopicContext.Provider>
  );
};

export default Main;
