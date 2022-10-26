import Head from 'next/head';
import { Stack } from '@chakra-ui/react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import Main from '../components/Main/Main';

export default function Home({ airports }) {
  return (
    <>
      <Head>
        <title>Home | Flybondi Adventures</title>
        <meta content="The adventure begins..." name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Stack direction={'column'} gap={'50px'} h={'100vh'}>
        <Navbar />
        <Main props={airports} />
        <Footer />
      </Stack>
    </>
  );
}

export const getStaticProps = async (context) => {
  const res = await fetch(`${process.env.API_URL}/airports`);
  const airports = await res.json();

  if (airports.status === 'success') {
    return {
      props: { airports }
    };
  }
};
