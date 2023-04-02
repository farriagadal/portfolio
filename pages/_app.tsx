import 'src/styles/main.css'
import Head from 'next/head'
import type { AppProps } from 'next/app'
import Transition from 'src/components/Transition'
import Footer from 'src/components/Footer'
import Header from 'src/components/Header'
import { FacebookPixelWithNoSSR } from 'src/components/FacebookPixel'
import { I18nextProvider } from 'react-i18next'
import i18n from 'src/i18n/i18n'
import { useTranslation } from 'react-i18next'

export default function App({ Component, pageProps }: AppProps) {
  const { t } = useTranslation()

  return (
    <I18nextProvider i18n={i18n}>
      <Head>
        <title>F.Arriagada - {t('portfolio')}</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#1A237E" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="apple-mobile-web-app-title" content="Tu Aplicación" />
        <link rel="apple-touch-icon" href="/favicon.ico" />
      </Head>
      <FacebookPixelWithNoSSR />
      <Header />
      <Transition>
        <Component {...pageProps} />
      </Transition>
      <Footer />
    </I18nextProvider>
  )
}