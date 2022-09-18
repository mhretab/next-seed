export const branches = {
  default: 'default',
  partytown: 'partytown',
  jest: 'jest',
  ariaStately: 'aria-and-stately',
  husky: 'husky',
  tailwindcss: 'styling/tailwindcss',
  styledComponents: 'styling/styled-components',
  emotion: 'styling/emotion',
  firebase: 'database/firebase',
  firebaseAdmin: 'database/firebase-admin',
  supabase: 'database/supabase',
};

export const questions = {
  bespoke: {
    name: 'configure',
    type: 'checkbox',
    message: 'Select What packages you would like to add\n',
    choices: [
      { value: branches.partytown, name: 'enable partytown' },
      { value: branches.jest, name: 'jest for unit testing' },
      { value: branches.ariaStately, name: 'install react-aria and react-stately' },
      { value: branches.husky, name: 'husky to run pre-commit and post-merge hooks' },
    ],
  },
  styling: {
    name: 'styling',
    type: 'list',
    message: 'How would you like to start your project\n',
    choices: [
      { value: branches.tailwindcss, name: 'tailwind' },
      { value: branches.styledComponents, name: 'styled components' },
      { value: branches.emotion, name: 'emotion' },
      { value: null, name: 'none' },
    ],
  },
  database: {
    name: 'database',
    type: 'list',
    message: 'What do you want for your database\n',
    choices: [
      { value: branches.firebase, name: 'firebase' },
      { value: branches.firebaseAdmin, name: 'firebase-admin' },
      { value: branches.supabase, name: 'supabase' },
      { value: null, name: 'none' },
    ],
  },
};
