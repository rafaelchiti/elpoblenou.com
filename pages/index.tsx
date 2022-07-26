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
      <div className="m-auto w-96 p-8 text-center">
        El Poblenou - 📸 coming soon
      </div>

      <HomePage />
    </>
  );
};

export default Home;
