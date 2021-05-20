import readlineSync from 'readline-sync';

import { getRandomIntNumber } from '../utils.js';
import { checkAnswer, greetings, startQuiz } from '../index.js';
import { ANSWER_NO, ANSWER_YES } from '../constants.js';

 const isEven = (num) => num % 2 === 0;

export const askQuestion = () => {
  const askingNumber = getRandomIntNumber();
  const isEvenNumber = isEven(askingNumber);
  const userAnswer = readlineSync.question(`Question: ${askingNumber}\n`);

  const isCorrect = checkAnswer(userAnswer, isEvenNumber);

  return {
    isCorrect,
    userAnswer,
    correctAnswer: isEvenNumber ? ANSWER_YES : ANSWER_NO,
  };
};

export const evenGame = () => {
  const name = greetings();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  startQuiz({
    name,
    generateQuestionFunc: askQuestion,
  });
};
