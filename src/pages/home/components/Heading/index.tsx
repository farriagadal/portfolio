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
        <label>Portafolio Web</label>
        <Splide aria-label="My Favorite Images"
          options={{
            type: 'fade',
            arrows: false,
            pagination: false,
            autoplay: true,
            interval: 10000,
            rewind: true,
            pauseOnHover: false
          }}
          onMoved={(newIndex, oldIndex) => {
            setImageId(oldIndex)
          }}
        >
          <SplideSlide>
            <h1>Full-Stack Developer</h1>
            <p>Software Engineer con +5 años de experiencia en el campo; +5 años en desarrollo Front-End con Typescript y Javascript (React.js, Vue.js y Angular); +2 años en desarrollo Back-End con tecnologías como Node.js y Python.</p>
            <BgImg show={imageId === 0}><Image src='/images/graficos.jpg' alt="Seedlab Fondo" fill /></BgImg>
          </SplideSlide>
          <SplideSlide>
            <h1>Front-End Developer</h1>
            <p>Software Engineer con +5 años de experiencia en el campo; +5 años en desarrollo Front-End con Typescript y Javascript (React.js, Vue.js y Angular); +2 años en desarrollo Back-End con tecnologías como Node.js y Python.</p>
            <BgImg show={imageId === 1}><Image src='/images/frontend.jpg' alt="Frontend" fill /></BgImg>
          </SplideSlide>
        </Splide>
      </Container>
      <ArrowDown href="/#techs">
        <Image src='/icons/arrow-down.svg' alt="Arrow Down" fill />
      </ArrowDown>
    </>

  )
}

export default Heading