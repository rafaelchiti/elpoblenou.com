import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { PHOTOS } from "src/constants/photos";
import { CollectionPage } from "src/pages/CollectionPage";
import { PhotoPage } from "src/pages/PhotoPage";

const Home: NextPage = () => {
  const router = useRouter();
  let author = router.query.author;
  author = author ? author.toString() : undefined;

  const photos = PHOTOS.filter((photo) => {
    const stringAuthor = author ? author.toString() : undefined;
    return (
      photo.author?.replace(" ", "-").toLowerCase() ===
      stringAuthor?.replace(" ", "-").toLowerCase()
    );
  });
  console.log(photos);

  if (!author || photos.length === 0) {
    return (
      <div>Ops we couldn't find that author, maybe the link is wrong?</div>
    );
  }

  return (
    <>
      <Head>
        <title>El Poblenou</title>
      </Head>
      <CollectionPage photos={photos} title={photos[0].author} />
    </>
  );
};

export default Home;
