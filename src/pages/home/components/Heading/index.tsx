import { Container, SvgAnimation, ArrowDown } from './styles'
import Image from 'next/image'
import TextAnimation from 'src/components/TextAnimation'
import { useTranslation } from 'react-i18next'

const Heading = () => {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <label>{t('portfolio')}</label>
        <h1>
          <b>Hey!</b><br />
          {t('welcome')}
        </h1>
        <div>
          <p>
            <pre>
              <TextAnimation
                typingSpeed={50}
                backspaceDelay={10}
                eraseDelay={1000}
                errorProbability={0}
                phrases={[t('desc1')]}
              />
            </pre>
          </p>
        </div>
        
  
        <SvgAnimation delay={4} speed={7}>
          <img className='img-shadow' src="images/animacion-5.svg" />
          <img className='img-original' src="images/animacion-5.svg" />
          <img className='img-thick' src="images/animacion-5.svg" />
        </SvgAnimation>
        <SvgAnimation delay={2} speed={6}>
          <img className='img-shadow' src="images/animacion-3.svg" />
          <img className='img-original' src="images/animacion-3.svg" />
          <img className='img-thick' src="images/animacion-3.svg" />
        </SvgAnimation>
        <SvgAnimation delay={3} speed={5}>
          <img className='img-shadow' src="images/animacion-4.svg" />
          <img className='img-original' src="images/animacion-4.svg" />
          <img className='img-thick' src="images/animacion-4.svg" />
        </SvgAnimation>
   
        <SvgAnimation delay={1} speed={4}>
          <img className='img-shadow' src="images/animacion-2.svg" />
          <img className='img-original' src="images/animacion-2.svg" />
          <img className='img-thick' src="images/animacion-2.svg" />
        </SvgAnimation>
        <SvgAnimation delay={0} speed={3}>
          <img className='img-shadow' src="images/animacion-1.svg" />
          <img className='img-original' src="images/animacion-1.svg" />
          <img className='img-thick' src="images/animacion-1.svg" />
        </SvgAnimation>


      </Container>
      <ArrowDown href="/#ourvalues" id="ourvalues" > 
        <Image src='/icons/arrow-down.svg' alt="Arrow Down" fill />
      </ArrowDown>
    </>

  )
}

export default Heading