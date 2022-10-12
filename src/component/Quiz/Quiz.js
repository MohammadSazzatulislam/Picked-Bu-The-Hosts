import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Quiz = ({ quiz }) => {
  const { question, options, correctAnswer } = quiz;
  let cutQuestion = question.slice(3, -4);

  const handleQuizButton = (questionAnswer) => {
    if (questionAnswer === correctAnswer) {
      toast.success(" Wow Right Answer", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error(" Ops! Wrong Answer", {
        position: "bottom-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleAnswerButton = () => {
    toast.info(`${correctAnswer}`, {
      position: "bottom-right",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <div
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="500"
      className=" card lg:w-4/5 rounded-sm md:w-4/5 h-auto w-full mx-auto mt-10 bg-fuchsia-900 text-white shadow-5xl"
    >
      <div className="flex justify-end pt-7 px-7 mb-0">
        <svg
          onClick={handleAnswerButton}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          className="w-7 h-7 cursor-pointer hover:text-blue-400"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </div>
      <div className="card-body pt-5">
        <h2 className="lg:text-3xl md:text-2xl text-xl font-semibold ">
          Quiz #: {cutQuestion}
        </h2>
        <ul className="m-3 grid lg:grid-cols-2 grid-cols-1 gap-5 ">
          {options.map((option, index) => (
            <div key={index} className="form-control">
              <label className="label flex justify-between items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="checkbox rounded-full border-2 mr-3 border-slate-50 text-white "
                />
                <span
                  onClick={(e) => handleQuizButton(e.target.innerText)}
                  className="text-white font-semibold text-xl w-full"
                >
                  {option}
                </span>
              </label>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Quiz;
