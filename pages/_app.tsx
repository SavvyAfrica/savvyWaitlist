import type { AppProps } from "next/app";
import Layout from "../layout/layout";
import "../styles/globals.css";
import { useRouter } from 'next/router';
import { AppStore } from '../global/store';
import { globalState } from '../global/store';
import 'react-tooltip/dist/react-tooltip.css';





function MyApp({ Component, pageProps }: AppProps) {  
  const {showNav, setShowNav} = globalState();
  

  const router = useRouter();

  const getContent = () => {
    if (router.pathname.startsWith(`/home`))
      return (
        <AppStore.Provider value= {{showNav, setShowNav}}>
          <Component {...pageProps} />
        </AppStore.Provider>
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
