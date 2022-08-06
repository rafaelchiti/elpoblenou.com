import * as React from "react";
import NextImage from "next/image";
import NextLink from "next/link";
import { PhotoType } from "src/constants/photos";
import { format } from "date-fns";
import { CalendarIcon } from "@radix-ui/react-icons";
import { useMediaQuery } from "react-responsive";

export const PhotoGrid = ({
  children,
}: {
  children: JSX.Element | JSX.Element[];
}) => {
  return <div className="sm:flex sm:flex-wrap">{children}</div>;
};

export const PhotoGridItem = ({ photo }: { photo: PhotoType }) => {
  // On a small device up to a small tablet, show images that calculate their width/quality based on that max size 768px
  // But when on a big device, never take more than 1/4 of the screen as the max width for calculating the image.
  // Read more here: https://nextjs.org/docs/api-reference/next/image#sizes
  const sizes = useMediaQuery({ query: "(max-width: 768px)" })
    ? "100vw"
    : "20vw";

  return (
    <div
      className="
                w-full h-auto  px-2 pb-16 mb-4 min-h-[300px]
                sm:h-[40vh] sm:w-1/2  sm:px-3
                md:w-1/2 md:h-[45vh] md:px-4 
                lg:w-1/3 lg:px-6 
                xl:w-1/4 
                2xl:w-1/5
                "
    >
      <NextLink href={`/photos/${photo.id}`}>
        <a>
          <div
            style={{ aspectRatio: `${photo.aspectRatio}` }}
            className="relative 
                    bg-gray-6
                    w-full h-full"
          >
            <NextImage
              src={photo.url}
              layout="fill"
              sizes={sizes}
              objectFit="cover"
              alt={`Photo from ${photo.author}`}
            />
          </div>
        </a>
      </NextLink>

      <div className="pt-1">
        <NextLink href={`/by/${photo.author.replace(" ", "-").toLowerCase()}`}>
          <a className="text-gray-10 text-md hover:underline hover:cursor-pointer">
            {photo.author}
          </a>
        </NextLink>
        <div className="flex items-center gap-2">
          <span className="text-gray-10  text-sm">
            <CalendarIcon className="" />
          </span>
          <span className="text-gray-10 text-xs">
            {format(photo.date, "MMM dd, yyyy")}
          </span>
        </div>
      </div>
    </div>
  );
};
