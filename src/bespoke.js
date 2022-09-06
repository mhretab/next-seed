import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import questions from './questions.js';
import { merge } from './git.js';

const bespoke = async (git) => {
  const answers = await inquirer.prompt(Object.values(questions));
  const spinner = createSpinner('Setting up project with your choice...').start();
  const branches = answers.configure;
  if (answers.styling) {
    branches.push(answers.styling);
  }
  if (answers.database) {
    branches.push(answers.database);
  }
  for (let branch of branches) {
    await merge(git, branch);
  }
  spinner.success({ text: '✅ Done setting up. Happy codding 💛' });
};

export default bespoke;
