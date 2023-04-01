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
    <Section isActive={isHover}>
      <Container>
        <BgImg isActive={isHover}>
          <Image src='/images/profile2.jpg' alt="Seedlab Fondo" fill onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)} />
        </BgImg>
        <Text isActive={isHover}>
          <label id="ourvalues-label">¿Quién soy?</label>
          <h2>Eterno Aprendiz</h2>
          <p onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <pre>He participado en diversos proyectos, abarcando desde el desarrollo de <b>Aplicaciones Web</b> a <b>Aplicaciones Móviles</b>.
              <br />Me enorgullece proporcionar soluciones de <b>excelencia</b> y constantemente busco maneras de perfeccionar mi trabajo.
              Me gustan los <b>emprendimientos</b>, estoy siempre atento a oportunidades que me permitan <b>innovar</b> y <b>desarrollar</b> soluciones eficaces.
              Mi <b>meta</b> es construir una <b>Start-Up</b> que contribuya positivamente a nuestra sociedad. 🚀
            </pre>
          </p>
        </Text>
      </Container>
    </Section>

  )
}

export default OurValues