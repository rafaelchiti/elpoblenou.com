import { groupBy, pickBy } from "lodash";

export type PhotoType = {
  id: string;
  url: string;
  aspectRatio: number;
  date: Date;
  author: string;
  title?: string;
};

// https://shortunique.id/ (10 length)

const AUTHOR_RAFA = "Rafael Chiti";

let RAFA_PHOTOS: PhotoType[] = [
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/1.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
    id: "Gv6HdjhvHL",
    author: AUTHOR_RAFA,
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/2.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
    id: "Gi7G3LfVwQ",
    author: AUTHOR_RAFA,
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/3.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
    id: "aEwpx1VThg",
    author: AUTHOR_RAFA,
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/4.jpg",
    aspectRatio: 0.6742,
    date: new Date("2022-07-27"),
    id: "pZqYnAasjm",
    author: AUTHOR_RAFA,
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/5.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
    id: "1OdXGP4MmB",
    author: AUTHOR_RAFA,
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/6.jpg",
    aspectRatio: 0.6742,
    date: new Date("2022-07-27"),
    id: "TB7ZK8mkBo",
    author: AUTHOR_RAFA,
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/7.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
    id: "vIOCIwnFVg",
    author: AUTHOR_RAFA,
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/8.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
    id: "ZqLQugmXi6",
    author: AUTHOR_RAFA,
  },
];

export const PHOTOS = [
  ...RAFA_PHOTOS,
  ...RAFA_PHOTOS.map((photo, index) => ({ ...photo, id: photo.id + index })),
];

// PHOTOS.

const duplicatedKeys = Object.keys(
  pickBy(groupBy(PHOTOS, "id"), (id) => id.length > 1)
);

if (duplicatedKeys.length > 0) {
  throw new Error(`We found photos with duplicated ids: [${duplicatedKeys}]`);
}
