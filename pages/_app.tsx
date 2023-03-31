import 'src/styles/main.css'
import type { AppProps } from 'next/app'
import Transition from 'src/components/Transition'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { FacebookPixelWithNoSSR } from 'src/components/FacebookPixel'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <FacebookPixelWithNoSSR />
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </>

  )
}