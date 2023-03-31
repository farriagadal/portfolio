import Head from 'next/head'
import Heading from 'src/pages/contact/components/Heading'
import FormContact from 'src/pages/contact/components/FormContact'

export default function ContactPage() {
  return (
    <div>
      <Head>
        <title>F.Arriagada - Portafolio Web</title>
      </Head>
      <Heading />
      <FormContact />
    </div>
  )
}