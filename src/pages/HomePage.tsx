import Image from "next/image";
import { PHOTOS } from "src/constants/photos";

export const HomePage = () => {
  return (
    <div className="max-w-7xl m-auto mt-16">
      <div className="border-2 flex flex-wrap items-top">
        {PHOTOS.map((photo) => {
          return (
            <div key={photo.url} className="w-96 relative">
              <img src={photo.url} width="100%" height="auto" />
            </div>
          );
        })}
      </div>
    </div>
  );
};
