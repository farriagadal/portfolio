import { Container, BgImg, ArrowDown, BgImgShadow, BgImg2 } from './styles'
import Image from 'next/image'
import TextAnimation from 'src/components/TextAnimation'

const Heading = () => {

  return (
    <>
      <Container>
        <label>Portafolio Web</label>
        <h1>
          <b>Hey!</b><br />
          Bienvenido
        </h1>
        <div>
          <p><pre>
            <TextAnimation
              typingSpeed={50}
              backspaceDelay={10}
              eraseDelay={1000}
              errorProbability={0}
              phrases={['Hola👋, soy <b>Fernando Arriagada</b> de Chile, Ingeniero de Software 👨‍💻 con 5+ años de experiencia en desarrollo <b>Front-End</b> (React, Vue, Angular) y 3+ años en <b>Back-End</b> (Node.js, Python).']}
            />
          </pre></p>
          
        </div>
        <BgImgShadow src="images/animacion.svg" />
        <BgImg src="images/animacion.svg" />
        <BgImg2 src="images/animacion.svg" />
      </Container>
      <ArrowDown href="/#ourvalues" id="ourvalues" > 
        <Image src='/icons/arrow-down.svg' alt="Arrow Down" fill />
      </ArrowDown>
    </>

  )
}

export default Heading