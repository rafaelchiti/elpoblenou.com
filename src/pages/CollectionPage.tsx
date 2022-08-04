import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { format } from "date-fns";
import NextImage from "next/image";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { PHOTOS, PhotoType } from "src/constants/photos";
import { PhotoGrid, PhotoGridItem } from "src/UILibrary/PhotoGrid";

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

      <PhotoGrid>
        {photos.map((photo, index) => {
          return <PhotoGridItem key={index} photo={photo} />;
        })}
      </PhotoGrid>
    </div>
  );
};
