import type { NextPage } from "next";
import Image from "next/image";
import { PHOTOS } from "src/constants/photos";

export const PhotoPage = ({ photoId }: { photoId?: string }) => {
  const photo = PHOTOS.find((photo) => photo.id === photoId);
  if (!photo) {
    return <div>Ops we couldn't find that photo, maybe the link is wrong?</div>;
  }

  return (
    <div className="h-full p-8">
      <div className="h-full flex flex-col md:flex-row items-stretch ">
        <aside className="order-2 md:order-1 w-96 flex flex-col ring-1">
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
