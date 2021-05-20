import readlineSync from 'readline-sync';
import { greetings, startQuiz } from '../index.js';
import { getRandomIntNumber } from '../utils.js';

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

export const askQuestion = () => {
  const firstOperand = getRandomIntNumber();
  const secondOperand = getRandomIntNumber();
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

export const brainCalc = () => {
  const name = greetings();
  console.log('What is the result of the expression?');

  startQuiz({
    name, generateQuestionFunc: askQuestion,
  });
};
