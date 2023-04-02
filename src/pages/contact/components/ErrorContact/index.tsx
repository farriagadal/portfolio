import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Text, BtnContact, Title } from './styles'
import { useTranslation } from 'react-i18next'

const ErrorContact = () => {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <BgImg>
          <Image src='/images/404.jpg' alt="Contact Image" fill />
        </BgImg>
        <Text>
          <Title>
            <h2>{t('error_1')}</h2>
          </Title>
          <p>{t('error_2')}</p>
          <Link href="/"><BtnContact>{t('back')}</BtnContact></Link>
        </Text>
      </Container>
    </>

  )
}

export default ErrorContact