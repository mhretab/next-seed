import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => (
  <div className={styles.container}>
    <Head>
      <title>Next.js starter boilerplate</title>
      <meta content="Next.js starter boilerplate in Typescript" name="description" />
      <link href="/favicon.ico" rel="icon" />
    </Head>

    <main className={styles.main}>
      <h1 className={styles.title}>
        Welcome to <a href="https://nextjs.org">Next.js!</a> starter boilerplate.
      </h1>
    </main>

    <footer className={styles.footer}>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Powered by{' '}
        <span className={styles.logo}>
          <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
        </span>
      </a>
    </footer>
  </div>
);

export default Home;
