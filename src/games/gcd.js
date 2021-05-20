import readlineSync from 'readline-sync';
import { getRandomIntPair } from '../utils.js';
import { greetings, startQuiz } from '../index.js';

const getGCD = (a, b) => {
  if (b === 0) {
    return a;
  }
  return getGCD(b, a % b);
};

const askQuestion = () => {
  const [firstOperand, secondOperand] = getRandomIntPair();
  const correctAnswer = getGCD(firstOperand, secondOperand);

  const userAnswer = readlineSync.question(`Question: ${firstOperand} ${secondOperand}\nYour answer: `);

  const isCorrect = +userAnswer === correctAnswer;

  return {
    isCorrect,
    correctAnswer,
    userAnswer,
  };
};

const brainGcd = () => {
  const name = greetings();
  console.log('Find the greatest common divisor of given numbers.');

  startQuiz({
    name,
    generateQuestionFunc: askQuestion,
  });
};

export default brainGcd;
