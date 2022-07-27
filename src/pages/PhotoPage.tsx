import type { NextPage } from "next";
import Image from "next/image";
import { PHOTOS } from "src/constants/photos";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";

export const PhotoPage = ({ photoId }: { photoId?: string }) => {
  const photo = PHOTOS.find((photo) => photo.id === photoId);
  const router = useRouter();

  if (!photo) {
    return <div>Ops we couldn't find that photo, maybe the link is wrong?</div>;
  }

  return (
    <div className="h-full p-8">
      <div className="h-full flex flex-col items-stretch   md:flex-row">
        <aside className="order-2 flex flex-col ring-1   md:order-1 md:w-96">
          <button
            onClick={() => router.back()}
            type="button"
            className="flex justify-center items-center p-1.5 w-7 h-7 rounded-md text-gray-10
              hover:text-white hover:bg-violet-5 hover:text-violet-10
              focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-violet-8"
          >
            <ArrowLeftIcon className="w-full h-full" />
          </button>
          {photo?.author}
        </aside>
        <main className="order-1 md:order-2 ring-1 w-full">
          <div
            style={{ aspectRatio: `${photo.aspectRatio}` }}
            className="relative bg-gray-6 ring-2 max-h-full"
          >
            <Image
              src={photo.url}
              layout="fill"
              alt={`Image from ${photo?.author}`}
            />
          </div>
        </main>
      </div>
    </div>
  );
};
