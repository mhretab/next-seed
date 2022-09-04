const questions = {
  bespoke: {
    name: 'configure',
    type: 'checkbox',
    message: 'Select What packages you would like to add\n',
    choices: [
      { value: 'partytown', message: 'Enable partytown' },
      { value: 'jest', message: 'Jest for react testing' },
      { value: 'react-aria', message: 'Install react-aria and react-stately' },
      { value: 'husky', message: 'husky to run pre-commit and post-merge hooks' },
    ],
  },
  styling: {
    name: 'styling',
    type: 'list',
    message: 'How would you like to start your project\n',
    choices: [
      { value: 'tailwind', message: 'tailwind' },
      { value: 'styled-components', message: 'styled-components' },
      { value: 'emotion', message: 'emotion' },
      { value: null, message: 'none' },
    ],
  },
  database: {
    name: 'database',
    type: 'list',
    message: 'What do you want for your database\n',
    choices: [
      { value: 'firebase', message: 'firebase' },
      { value: 'firebase-admin', message: 'firebase-admin' },
      { value: 'supabase', message: 'supabase' },
      { value: null, message: 'none' },
    ],
  },
};

export default questions;
