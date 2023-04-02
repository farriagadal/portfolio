import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Text, BtnContact, Title } from './styles'
import { useTranslation } from 'react-i18next'

const Success = () => {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <BgImg>
          <Image src='/images/robot.jpg' alt="Contact Image" fill />
        </BgImg>
        <Text>
          <Title>
            <Image src='/icons/check-circle.svg' alt="Check Icon" width={74} height={74} />
            <h2>{t('success')}</h2>
          </Title>
          <p>{t('success_1')} <a href="mailto: contacto@seedlab.cl">contacto@seedlab.cl</a></p>
          <Link href="/"><BtnContact>{t('back')} </BtnContact></Link>
        </Text>
      </Container>
    </>

  )
}

export default Success