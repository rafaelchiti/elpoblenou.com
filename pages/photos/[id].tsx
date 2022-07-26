import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { PhotoPage } from "src/pages/PhotoPage";

const Home: NextPage = () => {
  const router = useRouter();
  let { id } = router.query;

  return (
    <>
      <Head>
        <title>El Poblenou</title>
      </Head>
      <PhotoPage photoId={id ? id.toString() : undefined} />
    </>
  );
};

export default Home;
