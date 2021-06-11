import { getRandomNumber } from '../utils.js';
import playGame from '../index.js';
import { ANSWER_NO, ANSWER_YES } from '../constants.js';

const isEven = (num) => num % 2 === 0;

export const askQuestion = () => {
  const askingNumber = getRandomNumber();
  const isEvenNumber = isEven(askingNumber);

  return {
    questionText: askingNumber,
    correctAnswer: isEvenNumber ? ANSWER_YES : ANSWER_NO,
  };
};

const gameParamsConstructor = () => {
  const gameTitle = 'Answer "yes" if the number is even, otherwise answer "no".';

  return {
    title: gameTitle,
    makeQuestion: askQuestion,
  };
};

const evenGame = () => {
  playGame(gameParamsConstructor);
};

export default evenGame;
