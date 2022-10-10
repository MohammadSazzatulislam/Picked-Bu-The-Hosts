import React from "react";
import Topics from "../Topics/Topics";

const Home = () => {
  return (
    <div>
      <div className="h-4/5 ">
        <div
          className="hero-overlay absolute h-4/5 "
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1501139083538-0139583c060f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDB8fHF1aXp8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60") `,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            opacity: "0.9",
          }}
        ></div>
        <div className=" absolute text-center w-full py-4  text-neutral-content">
          <div className="max-w-md mx-auto">
            <h1 className="mb-5 text-5xl font-bold ">Hello there</h1>
            <p>
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
        </div>
        <div className="absolute top-2/4 w-full mx-auto pb-14">
          <Topics></Topics>
        </div>
      </div>
    </div>
  );
};

export default Home;
