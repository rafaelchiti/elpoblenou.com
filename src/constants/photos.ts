type Photos = {
  url: string;
  aspectRatio: number;
  date: Date;
  author?: string;
  title?: string;
};

let RAFA_PHOTOS: Photos[] = [
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/1.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/2.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/3.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/4.jpg",
    aspectRatio: 0.6742,
    date: new Date("2022-07-27"),
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/5.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/6.jpg",
    aspectRatio: 0.6742,
    date: new Date("2022-07-27"),
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/7.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/8.jpg",
    aspectRatio: 1.48315,
    date: new Date("2022-07-27"),
  },
];

RAFA_PHOTOS = RAFA_PHOTOS.map((photo) => ({
  ...photo,
  author: "Rafael Chiti",
}));

export const PHOTOS = [...RAFA_PHOTOS, ...RAFA_PHOTOS];
