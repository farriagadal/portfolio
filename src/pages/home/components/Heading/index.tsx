import { Container, BgImg, ArrowDown } from './styles'
import Image from 'next/image'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { useState } from 'react'

const Heading = () => {
  const [imageId, setImageId] = useState(0)

  return (
    <>
      <Container>
        <label>Con SEEDLAB Lograrás</label>
        <Splide aria-label="My Favorite Images"
          options={{
            type: 'fade',
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 6000,
            rewind: true,
            pauseOnHover: false
          }}
          onMoved={(newIndex, oldIndex) => {
            setImageId(oldIndex)
          }}
        >
          <SplideSlide>
            <h1>Presencia Digital</h1>
            <p>Nos especializamos en la definición y ejecución de proyectos digitales disruptivos con alto impacto en las organizaciones.</p>
            <BgImg show={imageId === 0}><Image src='/images/heading-bg.jpg' alt="Seedlab Fondo" fill /></BgImg>
          </SplideSlide>
          <SplideSlide>
            <h1>Mejorar tu negocio</h1>
            <p>Nos especializamos en la definición y ejecución de proyectos digitales disruptivos con alto impacto en las organizaciones.</p>
            <BgImg show={imageId === 1}><Image src='/images/marketing.jpg' alt="Seedlab Fondo" fill /></BgImg>
          </SplideSlide>
        </Splide>
      </Container>
      <ArrowDown>
        <Image src='/icons/arrow-down.svg' alt="Arrow Down" fill />
      </ArrowDown>
    </>

  )
}

export default Heading