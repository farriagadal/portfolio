import { Container, BgImg, ArrowDown, BgImgShadow, BgImg2 } from './styles'
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