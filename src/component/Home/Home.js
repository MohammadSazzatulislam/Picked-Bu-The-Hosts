import React from 'react';
import Quizzes from '../Quizzes/Quizzes';

const Home = () => {
    return (
      <div>
        <div
          className="hero h-96"
          style={{
            backgroundImage: `url("https://placeimg.com/1000/800/arch")`,
          }}
        >
          <div className="hero-overlay bg-opacity-20"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
              <p className="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
            </div>
            <Quizzes></Quizzes>
      </div>
    );
};

export default Home;