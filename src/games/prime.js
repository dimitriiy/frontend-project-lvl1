import playGame from '../index.js';
import { getRandomNumber } from '../utils.js';
import { ANSWER_NO, ANSWER_YES } from '../constants.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const askQuestion = () => {
  const askingNumber = getRandomNumber();
  const primeNumber = isPrime(askingNumber);

  return {
    questionText: askingNumber,
    correctAnswer: primeNumber ? ANSWER_YES : ANSWER_NO,
  };
};

const gameParamsConstructor = () => {
  const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no"';

  return {
    title: gameTitle,
    makeQuestion: askQuestion,
  };
};

const primeGame = () => {
  playGame(gameParamsConstructor);
};

export default primeGame;
