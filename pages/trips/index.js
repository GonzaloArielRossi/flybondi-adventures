import Head from 'next/head';
import { Stack, Container } from '@chakra-ui/react';

import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';
import TripsMain from '../../components/Trips/TripsMain';

export default function Home({ response }) {
  return (
    <>
      <Head>
        <title>Results | Flybondi Adventures</title>
        <meta content="The adventure begins..." name="description" />
        <link href="/favicon.ico" rel="icon" />
      </Head>
      <Stack direction={'column'} gap={'50px'} h={'100vh'}>
        <Navbar />
        <Container
          alignSelf={'center'}
          as={'main'}
          flex={1}
          m={'0 auto'}
          maxW={['90vw', '90vw', '90vw', '1200px']}
          p={0}
          pt={'8rem'}
          textAlign="center"
        >
          <TripsMain props={response} />
        </Container>
        <Footer />
      </Stack>
    </>
  );
}

export async function getServerSideProps({ query }) {
  const { airportId, date, budget, passengers } = query;
  const res = await fetch(
    `http://127.0.0.1:3300/api/flights/${airportId}?` +
      new URLSearchParams({
        date,
        budget,
        passengers
      })
  );
  const response = await res.json();

  return {
    props: { response }
  };
}
