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
      <div className="p-8 text-center text-4xl font-light italic">
        El Poblenou
      </div>

      <HomePage />
    </>
  );
};

export default Home;
