import type { AppProps } from "next/app";
// import "@complete-ui/core/dist/index.css";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
