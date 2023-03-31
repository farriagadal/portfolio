import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Text, BtnContact, Title } from './styles'

const Success = () => {
  return (
    <>
      <Container>
        <BgImg>
          <Image src='/images/robot.jpg' alt="Contact Image" fill />
        </BgImg>
        <Text>
          <Title>
            <Image src='/icons/check-circle.svg' alt="Check Icon" width={74} height={74} />
            <h2>Mensaje enviado exitosamente</h2>
          </Title>
          <p>Gracias por contactarse con nosotros les responderemos a la brevedad. Si tienes alguna pregunta urgente, puedes enviar un correo a <a href="mailto: contacto@seedlab.cl">contacto@seedlab.cl</a></p>
          <Link href="/"><BtnContact>VOLVER AL INICIO</BtnContact></Link>
        </Text>
      </Container>
    </>

  )
}

export default Success