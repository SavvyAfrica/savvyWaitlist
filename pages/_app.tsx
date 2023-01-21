import type { AppProps } from "next/app";
import Layout from "../layout/layout";
import "../styles/globals.css";
import {useRouter} from 'next/router';
import { useState } from "react";
import { MyGlobalContext } from '../Global/GlobalContext'


function MyApp({ Component, pageProps }: AppProps) {
  const [showNav, setShowNav] = useState<boolean>(true);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  
  const router = useRouter();

  
  const getContent = () => {
    if (router.pathname.startsWith(`/dashboard`))
      return (
        <MyGlobalContext.Provider value= {{showNav, setShowNav, isMobile, setIsMobile}}>
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
