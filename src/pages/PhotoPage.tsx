import type { NextPage } from "next";
import Image from "next/image";
import { PHOTOS, PhotoType } from "src/constants/photos";
import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/router";
import { format } from "date-fns";
import NextLink from "next/link";

export const PhotoPage = ({ photoId }: { photoId?: string }) => {
  const photo = PHOTOS.find((photo) => photo.id === photoId);
  const router = useRouter();

  if (!photo) {
    return <div>Ops we couldn't find that photo, maybe the link is wrong?</div>;
  }

  return (
    <div className="h-full p-8">
      <div className="h-full flex flex-col items-stretch   md:flex-row">
        {/*
         * Aside
         */}
        <aside className="order-2 flex flex-col p-2   md:order-1 md:w-96">
          <button
            onClick={() => router.back()}
            type="button"
            className="flex justify-center items-center p-1.5 w-7 h-7 rounded-md text-gray-10
              hover:text-white hover:bg-violet-5 hover:text-violet-10 cursor-default
              focus:outline-none focus:ring-1 focus:ring-offset-2 focus:ring-violet-8"
          >
            <ArrowLeftIcon className="w-full h-full" />
          </button>

          <div className="mt-4" />

          <div className="ring-1 ring-gray-7 p-3 rounded-md">
            <Avatar photo={photo} />
          </div>
        </aside>

        {/*
         * Photo
         */}
        <main className="order-1 md:order-2  w-full">
          <div
            style={{ aspectRatio: `${photo.aspectRatio}` }}
            className="relative bg-gray-6 max-h-full m-auto"
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

const Avatar = ({ photo }: { photo: PhotoType }) => {
  return (
    <div className="flex items-center">
      <div>
        {/* <img
            className="inline-block h-9 w-9 rounded-full"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          /> */}
        <AvatarPlaceholder />
      </div>

      <div className="ml-3">
        <NextLink href={`/by/${photo.author.replace(" ", "-").toLowerCase()}`}>
          <a className="text-gray-10 text-sm hover:underline hover:cursor-pointer">
            {photo.author}
          </a>
        </NextLink>

        <p className="text-xs font-medium text-gray-8">
          {format(photo.date, "MMM dd, yyyy")}
        </p>
      </div>
    </div>
  );
};

const AvatarPlaceholder = () => {
  return (
    <span className="inline-block h-7 w-7 rounded-full overflow-hidden bg-gray-100">
      <svg
        className="h-full w-full text-gray-300"
        fill="currentColor"
        viewBox="0 0 24 24"
      >
        <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    </span>
  );
};
