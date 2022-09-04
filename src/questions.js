const questions = {
  bespoke: {
    name: 'configure',
    type: 'checkbox',
    message: 'Select What packages you would like to add\n',
    choices: [
      { value: 'partytown', name: 'enable partytown' },
      { value: 'jest', name: 'jest for unit testing' },
      { value: 'aria-and-stately', name: 'install react-aria and react-stately' },
      { value: 'husky', name: 'husky to run pre-commit and post-merge hooks' },
    ],
  },
  styling: {
    name: 'styling',
    type: 'list',
    message: 'How would you like to start your project\n',
    choices: [
      { value: 'styling/tailwindcss', name: 'tailwind' },
      { value: 'styling/styled-components', name: 'styled-components' },
      { value: 'styling/emotion', name: 'emotion' },
      { value: null, name: 'none' },
    ],
  },
  database: {
    name: 'database',
    type: 'list',
    message: 'What do you want for your database\n',
    choices: [
      { value: 'database/firebase', name: 'firebase' },
      { value: 'database/firebase-admin', name: 'firebase-admin' },
      { value: 'database/supabase', name: 'supabase' },
      { value: null, name: 'none' },
    ],
  },
};

export default questions;
