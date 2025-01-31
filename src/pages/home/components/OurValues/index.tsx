import { Container, BgImg, Text, Section } from './styles'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const OurValues = () => {
  const { t } = useTranslation()

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