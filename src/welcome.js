import chalk from 'chalk';
import gradient from 'gradient-string';
import figlet from 'figlet';
import inquirer from 'inquirer';

const welcome = async () => {
  console.clear();
  console.log(
    '\n' +
      gradient.pastel.multiline(
        figlet.textSync(`Next Seed`, {
          horizontalLayout: 'default',
          verticalLayout: 'default',
          width: 120,
          whitespaceBreak: true,
        })
      ) +
      '\n'
  );

  console.log(chalk.cyanBright(` Create a Next.js project battries included.`));
  const answers = await inquirer.prompt({
    name: 'appName',
    type: 'input',
    message: 'What do you want to name your project?',
    default() {
      return 'my-app';
    },
  });

  return answers.appName;
};

export default welcome;
