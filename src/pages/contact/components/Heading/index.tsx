import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Bar, BackBtn, Text } from './styles'

const Heading = () => {
  return (
    <>
      <Container>
        <BgImg>
          <Image src='/images/robot.jpg' alt="Contact Image" fill />
        </BgImg>
        <Text>
          <h2>Conversemos</h2>
          <p>Ofrecezco servicios de desarrollo web, desde el diseño hasta el desarrollo y el alojamiento. Soy apasionado por el código, comprometido a brindar el mejor servicio posible.</p>
        </Text>
      </Container>
      <Bar>
        <Link href="/"><BackBtn>
          <Image src="/icons/back-arrow.svg" alt="Back" width={21} height={18} /> Volver
        </BackBtn></Link>
      </Bar>
    </>

  )
}

export default Heading