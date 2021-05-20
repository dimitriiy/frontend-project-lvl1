import { NUMBER_OF_SUCCESS_TRIES } from './constants.js';
import greetings from './greetings.js';

const startGame = ({ generateQuestionFunc, title }) => {
  const name = greetings();
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
