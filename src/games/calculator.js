import startGame from '../index.js';
import { getRandomIntNumber, getRandomIntPair, prepareNumberToAnswer } from '../utils.js';

const OPERATORS = [
  '+', '-', '*',
];

const calculate = (x1, x2, operator) => {
  const computingMap = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
  };

  return computingMap[operator](x1, x2);
};

const askQuestion = () => {
  const [firstOperand, secondOperand] = getRandomIntPair();
  const operator = OPERATORS[getRandomIntNumber(0, OPERATORS.length - 1)];
  const calculatedValue = calculate(firstOperand, secondOperand, operator);

  return {
    questionText: `Question: ${firstOperand} ${operator} ${secondOperand}`,
    correctAnswer: prepareNumberToAnswer(calculatedValue),
  };
};

const gameParamsConstructor = () => {
  const gameTitle = 'What is the result of the expression?';

  return {
    title: gameTitle,
    generateQuestionFunc: askQuestion,
  };
};

const calculator = () => {
  startGame(gameParamsConstructor);
};

export default calculator;
