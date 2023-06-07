import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
import '../styles/globals.css'
// import { AppStore } from '../global/store';
// import { globalState } from '../global/store';
import 'react-tooltip/dist/react-tooltip.css'
import { Toaster } from 'react-hot-toast'
import Head from 'next/head'

function MyApp({ Component, pageProps }: AppProps) {
  // const {showNav, setShowNav} = globalState();

  return (
    <Layout>
      <Head>
        <title>Gadget Subscription For Africans</title>
        <meta
          name='description'
          content='Buy or rent the gadgets you need, when you need them - the flexible and easy way with Savvy'
        />
        <meta
          name='keywords'
          content='African gadget subscription service, Budget-friendly tech gadgets, Affordable gadget leasing,Subscription-based gadgets, Wallet-friendly tech in Africa'
        />
        <meta name='author' content='Your Name' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </Head>
      <Component {...pageProps} />
      <Toaster position='bottom-center' reverseOrder={false} />
    </Layout>
  )
}

// return <>{getContent()}</>

export default MyApp
