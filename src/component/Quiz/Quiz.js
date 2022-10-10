import React from "react";

const Quiz = ({ quiz }) => {
  const { id, name, logo, total } = quiz;
  return (
    <div className="card card-compact border-2 border-blue-400 lg:w-64 md:w-80 w-full mx-auto  rounded-md  bg-base-300 shadow-2xl">
      <figure>
        <img className="bg-base-content rounded-0" src={logo} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>Total Quiz : {total}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Start Quiz</button>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
