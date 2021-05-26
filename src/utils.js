import { ANSWER_NO, ANSWER_YES } from './constants.js';

// eslint-disable-next-line max-len
export const getRandomIntNumber = (min = 0, max = 1000) => Math.floor(Math.random() * (max - min) + min);
export const getRandomIntPair = () => Array.from({ length: 2 }).map(() => getRandomIntNumber());
export const isValidAnswer = (str) => [ANSWER_YES, ANSWER_NO].includes(str);

export const ANSWER_STR_TO_BOOL_MATCH = {
  [ANSWER_NO]: false,
  [ANSWER_YES]: true,
};

export const checkStringAnswer = (answer, result) => {
  if (!isValidAnswer(answer)) {
    return false;
  }

  return ANSWER_STR_TO_BOOL_MATCH[answer] === result;
};
