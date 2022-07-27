import { FC } from "react";
import { useRouter } from "next/router";
import { useScrollRestoration } from "./useScrollRestoration";

export const ScrollRestorer: FC = () => {
  const router = useRouter();

  useScrollRestoration(router);

  return null;
};
