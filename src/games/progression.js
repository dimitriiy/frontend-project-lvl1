import { getRandomIntNumber, isEqualStringsAsNumber } from '../utils.js';
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

  return {
    equal: isEqualStringsAsNumber,
    questionText: `Question: ${progression.join(' ')}`,
    correctAnswer: hiddenNumber,
  };
};

const gameParamsConstructor = () => {
  const gameTitle = 'What number is missing in the progression?\n';

  return {
    title: gameTitle,
    generateQuestionFunc: askQuestion,
  };
};

const brainProgression = () => {
  startGame(gameParamsConstructor);
};

export default brainProgression;
