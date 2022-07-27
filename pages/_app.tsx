import "styles/globals.css";
import type { AppProps } from "next/app";
import { useScrollRestoration } from "src/utils/useScrollRestoration";

function MyApp({ Component, pageProps }: AppProps) {
  useScrollRestoration();
  return <Component {...pageProps} />;
}

export default MyApp;
