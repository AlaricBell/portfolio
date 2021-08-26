import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useEffect } from 'react'
import '../styles/style.css'

import AOS from "aos"
import "aos/dist/aos.css"

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    AOS.init({
      easing: "ease-out-cubic",
      once: true,
      offset: 50,
      duration: 600,
    });
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Hi! this is my personal portfolio page. If you like what you see feel free to contact me." />
        <title>{process.env.NEXT_PUBLIC_APP_NAME}</title>
      </Head>
      <Component {...pageProps} />
    </>
  )
}
export default MyApp
