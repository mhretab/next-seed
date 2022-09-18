import { simpleGit } from 'simple-git';
import { createSpinner } from 'nanospinner';

export const initGit = async (appName) => {
  const spinner = createSpinner(`Initializing`).start();
  const git = simpleGit({
    baseDir: process.cwd(),
    binary: 'git',
    maxConcurrentProcesses: 8,
    trimmed: false,
  });

  await git.clone('git@github.com:mhretab/next-seed.git', appName);
  await git.cwd(`${process.cwd()}/${appName}`);
  await git.fetch();
  spinner.success({ text: `Initializing complete` });
  return git;
};

export const merge = async (git, branchName) => {
  const spinner = createSpinner(`Setting up ${branchName}`).start();
  await git.fetch();
  await git.merge([`origin/${branchName}`, '-Xours', '--no-edit']);
  await git.add(['.']);
  const result = await git.commit(['--amend', '--no-edit']);
  spinner.success({ text: `[Done] - Setting up ${branchName}` });
  return result;
};
