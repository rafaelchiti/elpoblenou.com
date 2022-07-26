type Photos = {
  url: string;
  author?: string;
  title?: string;
};

let RAFA_PHOTOS: Photos[] = [
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/1.jpg",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/2.jpg",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/3.jpg",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/4.jpg",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/5.jpg",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/6.jpg",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/7.jpg",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/rc/la-florence-paris/8.jpg",
  },
];

RAFA_PHOTOS = RAFA_PHOTOS.map((photo) => ({
  ...photo,
  author: "Rafael Chiti",
}));

export const PHOTOS = [...RAFA_PHOTOS, ...RAFA_PHOTOS];
