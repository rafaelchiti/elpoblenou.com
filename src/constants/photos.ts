import { groupBy, pickBy } from "lodash";

export type PhotoType = {
  id: string;
  url: string;
  aspectRatio: number;
  date: Date;
  author: string;
  title?: string;
  fStop?: string;
  shutterSpeed?: string;
  iso?: string;
  camera?: string;
  lens?: string;
};

// https://shortunique.id/ (10 length)

const AUTHOR_RAFA = "Rafael Chiti";

const CAMERAS = {
  fujiXE4: "Fuji X-E4",
};
const LENSES = {
  xf23: "FUJINON  XF23mmF2 R WR",
};

let RAFA_PHOTOS_WED_JUL_28: PhotoType[] = [
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/1.jpg",
    aspectRatio: 3000 / 1691,
    date: new Date("2022-07-27"),
    id: "Gv6HdjhvHL",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/125",
    iso: "320",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/2.jpg",
    aspectRatio: 3000 / 2228,
    date: new Date("2022-07-27"),
    id: "Gi7G3LfVwQ",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/640",
    iso: "320",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/3.jpg",
    aspectRatio: 2446 / 3000,
    date: new Date("2022-07-27"),
    id: "aEwpx1VThg",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/80",
    iso: "320",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/4.jpg",
    aspectRatio: 921 / 614,
    date: new Date("2022-07-27"),
    id: "pZqYnAasjm",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/150",
    iso: "320",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/5.jpg",
    aspectRatio: 921 / 577,
    date: new Date("2022-07-27"),
    id: "1OdXGP4MmB",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/80",
    iso: "500",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/6.jpg",
    aspectRatio: 3000 / 1671,
    date: new Date("2022-07-27"),
    id: "TB7ZK8mkBo",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/80",
    iso: "500",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/7.jpg",
    aspectRatio: 921 / 614,
    date: new Date("2022-07-27"),
    id: "vIOCIwnFVg",
    author: AUTHOR_RAFA,
    fStop: "f/2",
    shutterSpeed: "1/420",
    iso: "320",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/8.jpg",
    aspectRatio: 921 / 614,
    date: new Date("2022-07-27"),
    id: "ZqLQugmXi6",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/300",
    iso: "320",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/9.jpg",
    aspectRatio: 921 / 614,
    date: new Date("2022-07-27"),
    id: "9uDUPTagOE",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/80",
    iso: "2500",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/10.jpg",
    aspectRatio: 921 / 614,
    date: new Date("2022-07-27"),
    id: "BJnFbryJvy",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/110",
    iso: "320",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/11.jpg",
    aspectRatio: 921 / 614,
    date: new Date("2022-07-27"),
    id: "DZe2tQAcFo",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/100",
    iso: "320",
  },
  {
    url: "https://d31ycvomo5jvoe.cloudfront.net/el-poblenou-site/rc/12.jpg",
    aspectRatio: 921 / 614,
    date: new Date("2022-07-27"),
    id: "JQuUO5brHi",
    author: AUTHOR_RAFA,
    fStop: "f/5.6",
    shutterSpeed: "1/55",
    iso: "6400",
  },
];

export const PHOTOS = [
  ...RAFA_PHOTOS_WED_JUL_28.map((p) => ({
    ...p,
    lens: LENSES.xf23,
    camera: CAMERAS.fujiXE4,
  })),
];

// PHOTOS.

const duplicatedKeys = Object.keys(
  pickBy(groupBy(PHOTOS, "id"), (id) => id.length > 1)
);

if (duplicatedKeys.length > 0) {
  throw new Error(`We found photos with duplicated ids: [${duplicatedKeys}]`);
}
