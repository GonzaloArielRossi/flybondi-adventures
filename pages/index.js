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
  let airports = null;

  try {
    const res = await fetch(`${process.env.API_URL}/api/airports`);

    airports = await res.json();
  } catch (err) {
    console.log(err);
  }

  return {
    props: { airports }
  };
};
