import * as React from "react";
import type { AppProps } from "next/app";
import { useScrollRestoration } from "src/utils/useScrollRestoration";
import splitbee from "@splitbee/web";
import "styles/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  useScrollRestoration();

  React.useEffect(() => {
    if (process.env.NODE_ENV === "production") splitbee.init();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
