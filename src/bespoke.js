import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import questions from './questions.js';

const sleep = (ms = 1000) => new Promise((r) => setTimeout(r, ms));

const bespoke = async () => {
  const answers = await inquirer.prompt(Object.values(questions));
  const spinner = createSpinner('Setting up project with your choice...').start();
  await sleep();
  console.log('\ncheckout base');
  answers.configure.forEach((branch) => {
    console.log(`merge ${branch}`);
  });
  if (answers.styling) {
    console.log(`merge ${answers.styling}`);
  }
  if (answers.database) {
    console.log(`merge ${answers.database}`);
  }
  spinner.success({ text: '✅ Done setting up. Happy codding 💛' });
  process.exit(0);
};

export default bespoke;
