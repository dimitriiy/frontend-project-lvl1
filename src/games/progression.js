import { getRandomNumber, prepareNumberToAnswer } from '../utils.js';
import playGame from '../index.js';

// eslint-disable-next-line max-len
const getProgression = ({ offset, start = 0, length = 10 }) => Array.from({ length }).reduce((acc) => {
  if (acc.length === 0) {
    return [start];
  }

  const last = acc[acc.length - 1];
  // eslint-disable-next-line no-param-reassign
  acc = [...acc, last + offset];
  return acc;
}, [start]);

const askQuestion = () => {
  const lengthOfProgression = 10;
  const hiddenNumberIndex = getRandomNumber() % lengthOfProgression;
  const firstElementInProgression = getRandomNumber();
  const offsetInProgression = getRandomNumber();
  // eslint-disable-next-line max-len
  const progression = getProgression({ start: firstElementInProgression, offset: offsetInProgression, length: lengthOfProgression });
  const hiddenNumber = progression[hiddenNumberIndex];
  progression[hiddenNumberIndex] = '..';

  return {
    questionText: progression.join(' '),
    correctAnswer: prepareNumberToAnswer(hiddenNumber),
  };
};

const gameParamsConstructor = () => {
  const gameTitle = 'What number is missing in the progression?';

  return {
    title: gameTitle,
    makeQuestion: askQuestion,
  };
};

const brainProgression = () => {
  playGame(gameParamsConstructor);
};

export default brainProgression;
