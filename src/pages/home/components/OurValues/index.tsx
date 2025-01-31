import { Container, BgImg, Text, Section } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'

const OurValues = () => {
  const { t } = useTranslation()
  // const [isShow, setIsShow] = useState(false)
  // const [true, settrue] = useState(false)

  // useEffect(() => {
  //   const observer: any = new IntersectionObserver(function(entries) {
  //     setIsShow(entries[0].intersectionRatio === 1)
  //   }, { threshold: [0, 1] })
  //   observer.observe(document.querySelector('#ourvalues-label'))
  // }, [])

  return (
    <Section isActive={true}>
      <Container>
        <BgImg isActive={true}>
          <Image src='/images/profile2.jpg' alt="Seedlab Fondo" fill />
        </BgImg>
        <Text isActive={true}>
          <label id="ourvalues-label">{t('menu_about')}</label>
          <h2>{t('aboutme')}</h2>
          <p>
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