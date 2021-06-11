// eslint-disable-next-line max-len
export const getRandomNumber = (min = 0, max = 1000) => Math.floor(Math.random() * (max - min) + min);
export const getRandomIntPair = () => Array.from({ length: 2 }).map(() => getRandomNumber());
export const prepareNumberToAnswer = (value) => value.toString();
