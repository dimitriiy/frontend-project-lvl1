import { getRandomIntNumber, isEqualStringsAsNumber } from '../utils.js';
import startGame from '../index.js';
import { ANSWER_NO, ANSWER_YES } from '../constants.js';

const isEven = (num) => num % 2 === 0;

export const askQuestion = () => {
  const askingNumber = getRandomIntNumber();
  const isEvenNumber = isEven(askingNumber);

  return {
    questionText: `Question: ${askingNumber}`,
    correctAnswer: isEvenNumber ? ANSWER_YES : ANSWER_NO,
  };
};

const gameParamsConstructor = () => {
  const gameTitle = 'Answer "yes" if the number is even, otherwise answer "no".';

  return {
    title: gameTitle,
    generateQuestionFunc: askQuestion,
  };
};

const evenGame = () => {
  startGame(gameParamsConstructor);
};

export default evenGame;
