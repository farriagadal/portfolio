import Image from 'next/image'
import Link from 'next/link'
import { Container, BgImg, Bar, BackBtn, Text } from './styles'
import { useTranslation } from 'react-i18next'

const Heading = () => {
  const { t } = useTranslation()

  return (
    <>
      <Container>
        <BgImg>
          <Image src='/images/robot.jpg' alt="Contact Image" fill />
        </BgImg>
        <Text>
          <h2>{t('talk')}</h2>
          <p>{t('talk_1')}</p>
        </Text>
      </Container>
      <Bar>
        <Link href="/"><BackBtn>
          <Image src="/icons/back-arrow.svg" alt="Back" width={21} height={18} /> {t('back_1')}
        </BackBtn></Link>
      </Bar>
    </>

  )
}

export default Heading