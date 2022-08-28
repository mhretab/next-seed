# Next Seed

An opinionated SEO friendly [Next.js](https://nextjs.org/) boilerplate with Typescript, pnpm, eslint, prettier and more (optional) packages.

## Tools/Packages

The packages selected here are of personal selection with intention of having the tools to create web apps that are accessible, adaptive, seo friendly and overall better UX.

### Base

- `pnpm` - as a package manager, read [here](https://pnpm.io/motivation) for why.
- `Typescript` - to not run into `undefined` is not a function on prod.
- `eslint`, `prettier` - to automate formatting, auto fix problems, follow a style guideline and many more

### Third-party Scripts and Analytics

- `partytown` is enabled for loading third party scripts in web worker.
- google analytics is added in a heading script (can easily be removed or replaced)

### Accessibility and Adaptability (Recommended)

- `react-aria` a bunch of hooks for creating primitive ui components that are accessible and adaptive
- `react-stately` to manage interaction state ui components created using `react-aria`

### Styling

- `tailwindcss` for fast, adaptive and flexible styling.
- [Inline Fold](https://marketplace.visualstudio.com/items?itemName=moalamri.inline-fold) is a recommended vs-code extension to collapse classes when using tailwind.

### Database/Back-end

- `firebase-admin` - could easily be replaced with `firebase` or `supabase`

## Getting Started

### Setting Up

To get started there are two way:

- Method 1 (Automatic):

  On your terminal run, and follow the prompt

  ```bash
  pnpm configure
  ```

- Method 2:

  Select the choosing and merging branches you want to main. by doing

  ```bash
  git branch
  ```

  you will see a list of branches. The table below explains what is included in each branch.

  | Branch Name | Description                                        |
  | ----------- | -------------------------------------------------- |
  | partytown   | `partytown` and google analytics setup             |
  | react-aria  | `react-aria` and `react-stately`                   |
  | tailwind    | `tailwind` setup with postcss and autoprefixer     |
  | firebase    | `firebase-admin` setup with basic helper functions |

### Running

To run the application do

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

💛 Happy codding 💛
