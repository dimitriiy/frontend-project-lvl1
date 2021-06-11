import playGame from '../index.js';
import { getRandomNumber, getRandomIntPair, prepareNumberToAnswer } from '../utils.js';

const computingMap = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
};
const OPERATORS = Object.keys(computingMap);

const calculate = (x1, x2, operator) => computingMap[operator](x1, x2);
const askQuestion = () => {
  const [firstOperand, secondOperand] = getRandomIntPair();
  const operator = OPERATORS[getRandomNumber(0, OPERATORS.length - 1)];
  const calculatedValue = calculate(firstOperand, secondOperand, operator);

  return {
    questionText: `${firstOperand} ${operator} ${secondOperand}`,
    correctAnswer: prepareNumberToAnswer(calculatedValue),
  };
};

const gameParamsConstructor = () => {
  const gameTitle = 'What is the result of the expression?';

  return {
    title: gameTitle,
    makeQuestion: askQuestion,
  };
};

const calculator = () => {
  playGame(gameParamsConstructor);
};

export default calculator;
