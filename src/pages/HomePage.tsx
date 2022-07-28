import * as React from "react";
import { format } from "date-fns";
import NextImage from "next/image";
import NextLink from "next/link";
import { PHOTOS, PhotoType } from "src/constants/photos";

export const HomePage = () => {
  return (
    <div className="m-auto">
      <div className="px-8 pt-6">
        <h1 className="text-4xl font-light italic ">El Poblenou</h1>
        <div className="mt-2" />

        <h2 className="font-light text-gray-10 max-w-2xl text-justify md:text-left">
          El Poblenou, a vibrant rapidly changing district of Barcelona. A
          former industrial neighbourhood, once full of factories and warehouses
          in the past 5 years transforms to something wonderfully undefinable, a
          place which happily hosts art ateliers, tech. companies, best coffee
          shops of the city, abandoned buildings, modern architecture,
          scrap-yards and music studios. Through this blog we want to explore
          and express our fascination with our barrio [hood] and capture its
          evolution.
        </h2>
      </div>

      <div className="mt-8" />

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
                <NextLink
                  href={`/by/${photo.author.replace(" ", "-").toLowerCase()}`}
                >
                  <a className="text-gray-10 text-sm hover:underline hover:cursor-pointer">
                    {photo.author}
                  </a>
                </NextLink>
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

function shuffle(array: PhotoType[]) {
  const newArray = [...array];
  let currentIndex = newArray.length,
    randomIndex;

  // While there remain elements to shuffle.
  while (currentIndex != 0) {
    // Pick a remaining element.
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [newArray[currentIndex], newArray[randomIndex]] = [
      newArray[randomIndex],
      newArray[currentIndex],
    ];
  }

  return newArray;
}
