import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => (
  <div className="flex min-h-screen flex-col items-center justify-center py-2">
    <Head>
      <title>Next.js starter boilerplate</title>
      <meta content="Next.js starter boilerplate in Typescript" name="description" />
      <link href="/favicon.ico" rel="icon" />
    </Head>

    <main className="flex w-full flex-1 flex-col items-center justify-center px-20 text-center">
      <h1 className="text-6xl font-bold">
        Welcome to{' '}
        <a className="text-blue-600" href="https://nextjs.org">
          Next.js!
        </a>{' '}
        starter boilerplate.
      </h1>
    </main>

    <footer className="flex h-24 w-full items-center justify-center border-t">
      <a
        className="flex items-center justify-center gap-2"
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Powered by <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
      </a>
    </footer>
  </div>
);

export default Home;
