import readlineSync from 'readline-sync';
import { getRandomIntNumber, isEven } from '../utils.js';
import { greetings, startQuiz } from '../index.js';

export const ANSWER_YES = 'yes';
export const ANSWER_NO = 'no';

export const ANSWER_STR_TO_BOOL_MATCH = {
  [ANSWER_NO]: false,
  [ANSWER_YES]: true,
};

const isValidAnswer = (str) => [ANSWER_YES, ANSWER_NO].includes(str);

export const checkAnswer = (answer, result) => {
  if (!isValidAnswer(answer)) {
    return false;
  }

  return ANSWER_STR_TO_BOOL_MATCH[answer] === result;
};

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
