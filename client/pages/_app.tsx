import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'

require("../styles/variables.less");

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Component {...pageProps} />
    <ToastContainer />
  </>
}

export default MyApp
