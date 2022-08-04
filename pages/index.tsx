import type { NextPage } from "next";
import Head from "next/head";
import { PHOTOS } from "src/constants/photos";
import { HomePage } from "src/pages/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>El Poblenou</title>
      </Head>
      <HomePage photos={PHOTOS} />
    </>
  );
};

export default Home;
