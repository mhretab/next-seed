import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Main, Title } from '@components/sharedStyles';

const Home: NextPage = () => (
  <Container>
    <Head>
      <title>Next.js starter boilerplate</title>
      <meta content="Next.js starter boilerplate in Typescript" name="description" />
      <link href="/favicon.ico" rel="icon" />
    </Head>

    <Main>
      <Title>
        Welcome to <a href="https://nextjs.org">Next.js!</a> starter boilerplate.
      </Title>
    </Main>

    <footer>
      <a
        href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
        rel="noopener noreferrer"
        target="_blank"
      >
        Powered by{' '}
        <span>
          <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
        </span>
      </a>
    </footer>
  </Container>
);

export default Home;
