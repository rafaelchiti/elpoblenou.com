import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>El Poblenou</title>
        <meta name="description" content="El Poblenou" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="m-auto w-96 p-8 text-center">
        El Poblenou - 📸 coming soon
      </div>
    </div>
  );
};

export default Home;
