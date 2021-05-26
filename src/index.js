import readlineSync from 'readline-sync';
import { NUMBER_OF_SUCCESS_TRIES } from './constants.js';

const startGame = (gameParamsCreator) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const { generateQuestionFunc, title } = gameParamsCreator();
  console.log(title);

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

export default startGame;
