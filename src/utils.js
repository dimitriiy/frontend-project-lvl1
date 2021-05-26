// eslint-disable-next-line max-len
export const getRandomIntNumber = (min = 0, max = 1000) => Math.floor(Math.random() * (max - min) + min);
export const getRandomIntPair = () => Array.from({ length: 2 }).map(() => getRandomIntNumber());

export const isEqual = (a, b) => a === b;
export const isEqualStringsAsNumber = (a, b) => +a === +b;
