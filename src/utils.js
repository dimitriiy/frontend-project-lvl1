import { ANSWER_NO, ANSWER_YES } from './constants.js';

export const getRandomIntNumber = () => Math.floor(Math.random() * 100);
export const getRandomIntPair = () => Array.from({ length: 2 }).map(getRandomIntNumber);
export const isValidAnswer = (str) => [ANSWER_YES, ANSWER_NO].includes(str);
