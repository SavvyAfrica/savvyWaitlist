import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
import '../styles/globals.css'
// import { AppStore } from '../global/store';
// import { globalState } from '../global/store';
import 'react-tooltip/dist/react-tooltip.css'
import { Toaster } from 'react-hot-toast'

function MyApp({ Component, pageProps }: AppProps) {
  // const {showNav, setShowNav} = globalState();

  return (
    <Layout>
      <Component {...pageProps} />
      <Toaster position='top-right' reverseOrder={false} />
    </Layout>
  )
}

// return <>{getContent()}</>

export default MyApp
