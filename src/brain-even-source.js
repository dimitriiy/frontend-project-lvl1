import readlineSync from 'readline-sync';
import { getRandomIntNumber, isEven } from './utils.js';
import { greetings } from './index.js';

export const ANSWER_YES = 'yes';
export const ANSWER_NO = 'no';
export const NUMBER_OF_SUCCESS_TRIES = 3;

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

export const doAnswer = () => {
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

  let countOfCorrectAnswers = 0;

  while (countOfCorrectAnswers < NUMBER_OF_SUCCESS_TRIES) {
    const { isCorrect, userAnswer, correctAnswer } = doAnswer();

    if (!isCorrect) {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}.'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
    countOfCorrectAnswers += 1;
  }

  console.log(`Congratulations, ${name}!`);
};
