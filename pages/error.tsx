import Head from 'next/head'
import ErrorContact from 'src/pages/contact/components/ErrorContact'

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>F.Arriagada - Portafolio Web</title>
      </Head>
      <ErrorContact />
    </div>
  )
}