import { FC } from "react";
import { useRouter } from "next/router";
import { useScrollRestoration } from "./useScrollRestoration";

export const ScrollRestorer: FC = () => {
  useScrollRestoration();
  return null;
};
