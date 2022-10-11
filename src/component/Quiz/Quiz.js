import { ToastContainer, toast } from "react-toastify";
import Swal from "sweetalert2";
import "react-toastify/dist/ReactToastify.css";

const Quiz = ({quiz}) => {
  const { question, options, correctAnswer } = quiz;

  let cutQuestion = question.slice(3, -4);

  const handleQuizButton = (questionAnswer) => {
    if (questionAnswer === correctAnswer) {
      toast.success("Right Answer", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Wrong Answer", {
        position: "top-center",
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
    Swal.fire(`${correctAnswer}`);
  };

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      className=" card lg:w-4/5 md:w-4/5 h-auto w-full mx-auto mt-10 bg-base-300 shadow-5xl"
    >
      <div className="flex justify-end pt-7 px-7 mb-0">
        <ToastContainer />
        <svg
          onClick={handleAnswerButton}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6 cursor-pointer"
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
          {options.map((option) => (
            <div className="form-control ">
              <label className="cursor-pointer flex items-center">
                <input
                  type="radio"
                  name="radio-6"
                  className="radio checked:bg-blue-500"
                />
                <span
                  onClick={(e) => handleQuizButton(e.target.innerText)}
                  className="font-semibold lg:p-5  md:p-1 text-md lg:text-xl md:text-xl"
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
