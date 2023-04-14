import type { AppProps } from 'next/app'
import Layout from '../layout/layout'
import '../styles/globals.css'
// import { AppStore } from '../global/store';
// import { globalState } from '../global/store';
import 'react-tooltip/dist/react-tooltip.css'

function MyApp({ Component, pageProps }: AppProps) {
  // const {showNav, setShowNav} = globalState();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

// return <>{getContent()}</>

export default MyApp
