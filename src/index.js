import readlineSync from 'readline-sync';
import { NUMBER_OF_SUCCESS_TRIES } from './constants.js';

const playGame = (makeGame) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);

  const { makeQuestion: makeQuestionInformation, title } = makeGame();
  console.log(title);

  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers < NUMBER_OF_SUCCESS_TRIES) {
    const { questionText, correctAnswer } = makeQuestionInformation();

    console.log(`Question: ${questionText}`);
    const userAnswer = readlineSync.question('Your answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    countOfCorrectAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};

export default playGame;
