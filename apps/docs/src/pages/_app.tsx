import type {AppProps} from "next/app";
import "@complete-ui/core/styles.css";
import "@/styles/globals.css";

export default function App({Component, pageProps}: AppProps) {
    return <Component {...pageProps} />;
}
