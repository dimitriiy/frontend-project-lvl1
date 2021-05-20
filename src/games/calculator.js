import readlineSync from 'readline-sync';
import { startGame } from '../index.js';
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
  const operator = OPERATORS[getRandomIntNumber() % OPERATORS.length];
  const correctAnswer = calculate(firstOperand, secondOperand, operator);

  const userAnswer = readlineSync.question(`Question: ${firstOperand} ${operator} ${secondOperand}\nYour answer: `);
  const isCorrect = +userAnswer === correctAnswer;

  return {
    isCorrect,
    correctAnswer,
    userAnswer,
  };
};

const calculator = () => {
  const gameTitle = 'What is the result of the expression?';

  startGame({
    title: gameTitle,
    generateQuestionFunc: askQuestion,
  });
};

export default calculator;
