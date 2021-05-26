import readlineSync from 'readline-sync';
import startGame from '../index.js';
import { getRandomIntNumber, getRandomIntPair } from '../utils.js';

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
  const operator = getRandomIntNumber(0, OPERATORS.length);
  const correctAnswer = calculate(firstOperand, secondOperand, operator);

  const userAnswer = readlineSync.question(`Question: ${firstOperand} ${operator} ${secondOperand}\nYour answer: `);
  const isCorrect = +userAnswer === correctAnswer;

  return {
    isCorrect,
    correctAnswer,
    userAnswer,x
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
