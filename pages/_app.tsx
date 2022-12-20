import type { AppProps } from "next/app";
import Layout from "../layout/layout";
import "../styles/globals.css";
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if(router.asPath =='/sign-up') {
    return (
      <Component {...pageProps} />
    )
  }

  if(router.asPath =='/sign-in') {
    return (
      <Component {...pageProps} />
    )
  }

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
