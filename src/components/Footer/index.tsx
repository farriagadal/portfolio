import Link from 'next/link'
import { Container, Icons } from './styles'
import Image from 'next/image'
import { useTranslation } from 'react-i18next'

const Footer = () => {
  const { t } = useTranslation()

  return (
    <Container>
      <Link href="/">
        <h2>F. Arriagada</h2>
      </Link>
      <p>Fernando Arriagada - {t('portfolio')} 2025 - Chile</p>
      <Icons>
        <a href="https://github.com/farriagadal" target="_blank" rel="noreferrer">
          <Image src='/icons/github.svg' alt="github" width={18} height={18} />
        </a>
        <a href="https://www.linkedin.com/in/fernando-arriagada/" target="_blank" rel="noreferrer">
          <Image src='/icons/linkedin.svg' alt="linkedin" width={18} height={18} />
        </a>
      </Icons>
    </Container>
  )
}

export default Footer