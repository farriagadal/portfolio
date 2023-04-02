import { Container, BgImg, Text, Section } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const OurValues = () => {
  const { t } = useTranslation()
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
          <label id="ourvalues-label">{t('menu_about')}</label>
          <h2>{t('aboutme')}</h2>
          <p onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
            <pre dangerouslySetInnerHTML={{
              __html: t('aboutme_text')
            }}>
            </pre>
          </p>
        </Text>
      </Container>
    </Section>

  )
}

export default OurValues