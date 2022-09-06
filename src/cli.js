import inquirer from 'inquirer';
import { createSpinner } from 'nanospinner';
import questions from './questions.js';
import welcome from './welcome.js';
import bespoke from './bespoke.js';
import { initGit, merge } from './git.js';

const DEFAULT = 'DEFAULT';
const DATABASE = 'DATABASE';
const BESPOKE = 'BESPOKE';

const configure = async (git) => {
  const answers = await inquirer.prompt({
    name: 'configure',
    type: 'list',
    message: 'How would you like to start your project\n',
    choices: [
      { value: DEFAULT, name: 'Default (no database)' },
      { value: DATABASE, name: 'Default with database (supabase | firebase | firebase-admin)' },
      { value: BESPOKE, name: 'Bespoke: I want to configre everything' },
    ],
  });

  if (answers.configure === BESPOKE) {
    await bespoke(git);
    return;
  }

  const { database } =
    answers.configure === DATABASE && (await inquirer.prompt(questions.database));
  const spinner = createSpinner('Setting up default config with database...').start();
  await merge(git, 'default');
  if (database) {
    await merge(git, database);
  }
  spinner.success({ text: '✅ Done setting up. Happy codding 💛' });
  return;
};

// Run it with top-level await
const cli = async () => {
  console.clear();
  const projectName = await welcome();
  const git = await initGit(projectName);
  await configure(git);
  console.log(`change project to ${projectName}`);
  process.exit(0);
};

export default cli;
