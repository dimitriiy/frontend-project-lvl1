import readlineSync from 'readline-sync';

import { getRandomIntNumber } from '../utils.js';
import startGame from '../index.js';

const getProgressionArray = (length = 10) => {
  const offset = getRandomIntNumber();

  return Array.from({ length }).reduce((acc) => {
    if (acc.length === 0) {
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

const brainProgression = () => {
  const gameTitle = 'What number is missing in the progression?\n';

  startGame({
    title: gameTitle,
    generateQuestionFunc: askQuestion,
  });
};

export default brainProgression;
