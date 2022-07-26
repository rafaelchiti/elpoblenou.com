import { format } from "date-fns";
import Image from "next/image";
import { PHOTOS } from "src/constants/photos";

export const HomePage = () => {
  return (
    <div className="m-auto mt-16">
      <div className="flex flex-wrap items-end">
        {PHOTOS.map((photo, index) => {
          return (
            <div
              key={index}
              className="py-4 px-7 pb-16 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/4 2xl:w-1/5mb-9"
            >
              <div
                key={index}
                style={{ aspectRatio: `${photo.aspectRatio}` }}
                className="relative bg-gray-6"
              >
                <Image src={photo.url} layout="fill" />
              </div>

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
