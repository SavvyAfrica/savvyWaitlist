import type { AppProps } from "next/app";
import Layout from "../layout/layout";
import "../styles/globals.css";
import {useRouter} from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  if(router.pathname ==='/sign-up', '/sign-in', '/dashboard') {
    return (
      <Component {...pageProps} />
    )
  }
  else {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    );
  }
}

export default MyApp;
