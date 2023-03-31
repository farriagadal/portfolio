import { Container, BgImg, Text, Section } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const OurValues = () => {
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      setIsShow(entries[0].intersectionRatio === 1)
    }, { threshold: [0, 1] })
    observer.observe(document.querySelector('#ourvalues-label'))
  }, [])

  return (
    <Section id="ourvalues" isActive={isShow || isHover} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Container>
        <BgImg isActive={isShow || isHover}><Image src='/images/profile2.jpg' alt="Seedlab Fondo" fill /></BgImg>
        <Text isActive={isShow || isHover}>
          <label id="ourvalues-label">¿Quién soy?</label>
          <h2>Apasionado por buscar soluciones tecnológicas</h2>
          <p>Software Engineer con +5 años de experiencia en el campo; +5 años en desarrollo Front-End con Typescript y Javascript (React.js, Vue.js y Angular); +2 años en desarrollo Back-End con tecnologías como Node.js y Python.
            <br />Motivado por la creación de soluciones IT, aspiro siempre al desarrollo personal tanto humano como profesional, mejorando día a día mis cualidades, metodologías y buenas prácticas.
          </p>
        </Text>
      </Container>
    </Section>

  )
}

export default OurValues