export const LoadData = async () => {
  const data = await fetch("https://openapi.programming-hero.com/api/quiz");
  const topic = await data.json();
  return topic;
};

export const quizzes = async ({ params }) => {
  const data = await fetch(
    `https://openapi.programming-hero.com/api/quiz/${params.id}`
  );
  const quizzes = await data.json();
  return quizzes;
};
