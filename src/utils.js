export const getRandomIntNumber = () => Math.floor(Math.random() * 100);
export const isEven = (num) => num % 2 === 0;
export const getRandomIntPair = () => Array.from({ length: 2 }).map(getRandomIntNumber);
