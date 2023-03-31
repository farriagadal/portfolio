import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Text, BtnContact, Title } from './styles'

const Success = () => {
  return (
    <>
      <Container>
        <BgImg>
          <Image src='/images/404.jpg' alt="Contact Image" fill />
        </BgImg>
        <Text>
          <Title>
            <h2>Ha ocurrido un error</h2>
          </Title>
          <p>Por favor intente más, estamos solucionando el problema en estos momentos.</p>
          <Link href="/"><BtnContact>VOLVER AL INICIO</BtnContact></Link>
        </Text>
      </Container>
    </>

  )
}

export default Success