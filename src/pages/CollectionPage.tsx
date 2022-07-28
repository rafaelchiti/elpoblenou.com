import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PHOTOS, PhotoType } from "src/constants/photos";

export const CollectionPage = ({
  photos,
  title,
}: {
  photos: PhotoType[];
  title: string;
}) => {
  const router = useRouter();

  return (
    <div className="m-auto mt-16">
      {/* Title */}
      <div className="flex justify-center ">
        <div className="relative flex items-center">
          <button
            onClick={() => router.push("/")}
            type="button"
            className="absolute left-0 -translate-x-full -ml-4
            flex justify-center items-center p-1.5 w-7 h-7 rounded-md text-gray-10
          hover:text-white hover:bg-violet-5 hover:text-violet-10 cursor-default
            focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-violet-8"
          >
            <ArrowLeftIcon className="w-full h-full" />
          </button>

          <h1 className="inline text-center text-4xl font-light">{title}</h1>
        </div>
      </div>

      <div className="mt-10" />

      <div className="flex flex-wrap items-end">
        {photos.map((photo, index) => {
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
