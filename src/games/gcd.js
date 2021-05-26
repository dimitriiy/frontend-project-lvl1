import { getRandomIntPair, isEqualStringsAsNumber } from '../utils.js';
import startGame from '../index.js';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const askQuestion = () => {
  const [firstOperand, secondOperand] = getRandomIntPair();
  const correctAnswer = getGCD(firstOperand, secondOperand);

  return {
    equal: isEqualStringsAsNumber,
    questionText: `Question: ${firstOperand} ${secondOperand}`,
    correctAnswer,
  };
};

const gameParamsConstructor = () => {
  const gameTitle = 'Find the greatest common divisor of given numbers.';

  return {
    title: gameTitle,
    generateQuestionFunc: askQuestion,
  };
};

const brainGcd = () => {
  startGame(gameParamsConstructor);
};

export default brainGcd;
