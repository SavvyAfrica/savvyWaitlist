import type { AppProps } from "next/app";
import Layout from "../layout/layout";
import "../styles/globals.css";
import {useRouter} from 'next/router';
import { useState } from "react";
import { MyGlobalContext } from '../global/GlobalContext';


function MyApp({ Component, pageProps }: AppProps) {
  const [showNav, setShowNav] = useState<boolean>(true);  // dashboard state

  const router = useRouter();

  const getContent = () => {
    if (router.pathname.startsWith(`/home`))
      return (
        <MyGlobalContext.Provider value= {{showNav, setShowNav}}>
          <Component {...pageProps} />
        </MyGlobalContext.Provider>
      )

    if (router.pathname.startsWith(`/login`))
      return (
        <Component {...pageProps} />
      )
    if (router.pathname.startsWith(`/register`))
      return (
        <Component {...pageProps} />
      )
      

    return (
      <Layout>
        <Component {...pageProps} />{" "}
      </Layout>
    );
  };


  return <>{getContent()}</>;
}

export default MyApp;
