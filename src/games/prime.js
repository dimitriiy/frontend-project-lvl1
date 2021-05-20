import readlineSync from 'readline-sync';

import startGame from '../index.js';
import { checkStringAnswer, getRandomIntNumber } from '../utils.js';
import { ANSWER_NO, ANSWER_YES } from '../constants.js';

const isPrime = (num) => {
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return num > 1;
};

const askQuestion = () => {
  const askingNumber = getRandomIntNumber();
  const isEvenNumber = isPrime(askingNumber);
  const userAnswer = readlineSync.question(`Question: ${askingNumber}\n`);

  const isCorrect = checkStringAnswer(userAnswer, isEvenNumber);

  return {
    isCorrect,
    userAnswer,
    correctAnswer: isEvenNumber ? ANSWER_YES : ANSWER_NO,
  };
};

const primeGame = () => {
  const titleGame = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  startGame({
    generateQuestionFunc: askQuestion,
    title: titleGame,
  });
};

export default primeGame;
