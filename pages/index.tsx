import Head from 'next/head'
import Heading from 'src/pages/home/components/Heading'
import OurValues from 'src/pages/home/components/OurValues'
import Techs from 'src/pages/home/components/Techs'

export default function Home() {
  return (
    <div>
      <Head>
        <title>F.Arriagada - Portafolio Web</title>
        <meta name="description" content="Software Engineer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Heading />
      <OurValues />
      <Techs />
    </div>
  )
}
