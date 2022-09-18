import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import { branches, questions } from './questions.js';
import { merge } from './git.js';

const bespoke = async (git) => {
  const answers = await inquirer.prompt(Object.values(questions));
  const spinner = createSpinner('Setting up project with your choice...').start();
  const selectedBranches = answers.configure;
  if (answers.styling) {
    if (
      answers.styling === branches.styledComponents &&
      selectedBranches.includes(branches.partytown)
    ) {
      delete selectedBranches[branches.partytown];
      selectedBranches.push(`${branches.styledComponents}-${branches.partytown}`);
    } else {
      selectedBranches.push(answers.styling);
    }
  }
  if (answers.database) {
    selectedBranches.push(answers.database);
  }
  for (let branch of selectedBranches) {
    await merge(git, branch);
  }
  spinner.success({ text: '✅ Done setting up. Happy codding 💛' });
};

export default bespoke;
