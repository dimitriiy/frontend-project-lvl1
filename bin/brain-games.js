#!/usr/bin/env node
import readlineSync from 'readline-sync';

const init = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');

  if (name) {
    console.log(`Hello, ${name}!`);
  }
};

init();
