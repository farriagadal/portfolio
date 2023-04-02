import Link from 'next/link'
import { Container, Logo, Isotipo, MenuButton, MenuList, ContactBtn, CloseBtn, LangBtn } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

type NavMobileProps = {
  routes: {
    name: string
    href: string
    external?: boolean
  }[]
}

const NavMobile = ({ routes }: NavMobileProps) => {
  const { t } = useTranslation()
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const [isSpanish, setIsSpanish] = useState(false) // elimina la inicialización del estado isSpanish

  useEffect(() => {
    const currentLanguage = i18n.language
    setIsSpanish(currentLanguage === 'es') // actualiza el estado basado en el idioma detectado
  }, [])

  return (
    <>
      <div id="indicator" />
      <Container>
        <Isotipo><Link href="/">
          <h2>F.</h2>
        </Link></Isotipo>
      </Container>
      <Logo><Link href="/">
        <h2>Arriagada</h2>
      </Link></Logo>
      <MenuButton onClick={() => setOpen(true)}>
        <Image src='/icons/menu-icon.svg' alt="SeedLab Logo" width={29} height={19} />
      </MenuButton>
      {
        open && (
          <MenuList>
            {
              routes.map((route, index) => (
                route.external && router.pathname === '/'
                  ? <a key={index} href={ route.href }>{ route.name }</a>
                  : <Link key={index} href={ route.href }>{ route.name }</Link>
              ))
            }
            <LangBtn onClick={() => {
              const newLang = isSpanish ? 'en' : 'es'
              i18n.changeLanguage(newLang)
              setIsSpanish(!isSpanish)
            }}>
              {isSpanish ? (
                <>Español <img src='/images/spain-flag.png' alt="ES Icon" /></>
              ) : (
                <>English <img src='/images/en-flag.png' alt="EN Icon" /></>
              )}
            </LangBtn>
            <Link href="/contacto"><ContactBtn>
              <span>{t('contact_me')}</span>
              <Image src='/icons/contact-icon.svg' alt="Contact Icon" width={16} height={16} />
            </ContactBtn></Link>

            <CloseBtn onClick={() => setOpen(false)}>
              <Image src='/icons/close-icon.svg' alt="Close Icon" width={22} height={22} />
            </CloseBtn>
          </MenuList>
        )
      }

    </>
  )
}

export default NavMobile