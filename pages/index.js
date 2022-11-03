import Head from 'next/head';
import { Stack } from '@chakra-ui/react';

import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import HomeMain from '../components/Home/HomeMain';

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
        <HomeMain props={airports} />
        <Footer />
      </Stack>
    </>
  );
}

export const getStaticProps = async () => {
  const res = await fetch(`${process.env.API_URL}/api/airports`);
  const airports = await res.json();

  if (airports.status === 'success') {
    return {
      props: { airports }
    };
  }
};
