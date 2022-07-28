import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { HomePage } from "src/pages/HomePage";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>El Poblenou</title>
      </Head>
      <HomePage />
    </>
  );
};

export default Home;
