import readlineSync from 'readline-sync';
import { NUMBER_OF_SUCCESS_TRIES } from './constants.js';

export const greetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  if (name) {
    console.log(`Hello, ${name}!`);
  }

  return name;
};

export const startQuiz = ({ generateQuestionFunc, name }) => {
  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers < NUMBER_OF_SUCCESS_TRIES) {
    const { isCorrect, userAnswer, correctAnswer } = generateQuestionFunc();

    if (!isCorrect) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    countOfCorrectAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
