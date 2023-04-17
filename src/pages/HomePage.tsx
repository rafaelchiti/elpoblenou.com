import * as React from "react";
import { PhotoType } from "src/constants/photos";
import { PhotoGrid, PhotoGridItem } from "src/UILibrary/PhotoGrid";

export const HomePage = ({ photos }: { photos: PhotoType[] }) => {
  return (
    <div className="m-auto pb-8 md:px-10">
      <div className="px-8 pt-6">
        <h1 className="text-4xl font-light italic ">El Poblenou</h1>
        <div className="mt-2 text-sm rounded-sm bg-gray-3 inline-block px-3 py-2">
          <h3 className="text-gray-11 p-0 m-0">design inspiration from</h3>
          <a
            className="m-0 p-0 underline"
            target="_blank"
            rel="noreferrer"
            href="https://imgs.so"
          >
            imgs.so
          </a>
        </div>
        <div className="mt-3" />

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
      <PhotoGrid>
        {photos.map((photo, index) => {
          return <PhotoGridItem key={index} photo={photo} />;
        })}
      </PhotoGrid>
    </div>
  );
};
