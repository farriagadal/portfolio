import { Container, BgImg, Text, Section, PatternBg } from './styles'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'
import { useRef } from 'react'
import { useScroll, useTransform } from 'framer-motion'

const OurValues = () => {
  const { t } = useTranslation()
  const sectionRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  })

  const y = useTransform(scrollYProgress, [0, 1], ['-40%', '40%'])

  return (
    <Section isActive={true} ref={sectionRef}>
      <PatternBg style={{ y }} />
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