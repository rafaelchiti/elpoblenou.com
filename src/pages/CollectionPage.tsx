import { format } from "date-fns";
import NextImage from "next/image";
import NextLink from "next/link";
import { PHOTOS, PhotoType } from "src/constants/photos";

export const CollectionPage = ({
  photos,
  title,
}: {
  photos: PhotoType[];
  title: string;
}) => {
  return (
    <div className="m-auto mt-16">
      <h1 className="text-center text-2xl font-bold">{title}</h1>
      <div className="mt-10" />
      <div className="flex flex-wrap items-end">
        {PHOTOS.map((photo, index) => {
          return (
            <div
              key={index}
              className="py-4 px-7 pb-16 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/5mb-9"
            >
              <NextLink href={`/photos/${photo.id}`}>
                <a>
                  <div
                    key={index}
                    style={{ aspectRatio: `${photo.aspectRatio}` }}
                    className="relative bg-gray-6"
                  >
                    <NextImage
                      src={photo.url}
                      layout="fill"
                      alt={`Photo from ${photo.author}`}
                    />
                  </div>
                </a>
              </NextLink>

              <div className="pt-2">
                <span className="text-gray-10 text-sm hover:underline hover:cursor-pointer">
                  {photo.author}
                </span>
                <span className="text-gray-10 text-sm px-3">{"·"}</span>
                <span className="text-gray-10 text-sm">
                  {format(photo.date, "MMM dd, yyyy")}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};