import "styles/globals.css";
import type { AppProps } from "next/app";

import "src/pages/masonry.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
