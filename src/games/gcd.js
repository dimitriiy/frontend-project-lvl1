import { getRandomIntPair, prepareNumberToAnswer } from '../utils.js';
import playGame from '../index.js';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const askQuestion = () => {
  const [firstOperand, secondOperand] = getRandomIntPair();
  const gcdValue = getGCD(firstOperand, secondOperand);

  return {
    questionText: `${firstOperand} ${secondOperand}`,
    correctAnswer: prepareNumberToAnswer(gcdValue),
  };
};

const gameParamsConstructor = () => {
  const gameTitle = 'Find the greatest common divisor of given numbers.';

  return {
    title: gameTitle,
    makeQuestion: askQuestion,
  };
};

const brainGcd = () => {
  playGame(gameParamsConstructor);
};

export default brainGcd;
