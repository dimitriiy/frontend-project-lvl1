import readlineSync from 'readline-sync';
import { getRandomIntNumber } from '../utils.js';
import { greetings, startQuiz } from '../index.js';

const getProgressionArray = (length = 10) => {
  const offset = getRandomIntNumber();

  return Array.from({ length }).reduce((acc) => {
    if (!acc.length) {
      return [getRandomIntNumber()];
    }

    const last = acc[acc.length - 1];
    // eslint-disable-next-line no-param-reassign
    acc = [...acc, last + offset];
    return acc;
  }, []);
};

export const askQuestion = () => {
  const lengthOfProgression = 10;
  const hiddenNumberIndex = getRandomIntNumber() % lengthOfProgression;
  const progression = getProgressionArray(lengthOfProgression);

  const hiddenNumber = progression[hiddenNumberIndex];
  progression[hiddenNumberIndex] = '..';

  const userAnswer = readlineSync.question(`Question: ${progression.join(' ')}\nYour answer: `);

  const isCorrect = +userAnswer === hiddenNumber;

  return {
    isCorrect,
    correctAnswer: hiddenNumber,
    userAnswer,
  };
};

export const brainProgression = () => {
  const name = greetings();
  console.log('What number is missing in the progression?\n');

  startQuiz({
    name, generateQuestionFunc: askQuestion,
  });
};
