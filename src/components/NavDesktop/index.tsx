import Link from 'next/link'
import { Container, Logo, MenuOption, ContactBtn, LangBtn } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import i18n from 'i18next'

type NavDesktopProps = {
  routes: {
    name: string
    href: string
    external?: boolean
  }[]
}

const NavDesktop = ({ routes }: NavDesktopProps) => {
  const { t } = useTranslation()
  const [isTop, setIsTop] = useState(true)
  const router = useRouter()
  const [isSpanish, setIsSpanish] = useState(false) // elimina la inicialización del estado isSpanish

  useEffect(() => {
    const currentLanguage = i18n.language
    setIsSpanish(currentLanguage === 'es') // actualiza el estado basado en el idioma detectado

    const observer: any = new IntersectionObserver(function(entries) {
      setIsTop(entries[0].intersectionRatio === 1)
    }, { threshold: [0,1] })

    observer.observe(document.querySelector('#indicator'))
  }, [])

  return (
    <>
      <div id="indicator" />
      <Container isTop={isTop}>
        <nav>
          <Logo><Link href="/">
            <h2 className='full-logo'><span>F.</span>Arriagada</h2>
            <h2 className='short-logo'><span>F.</span> Arriagada</h2>
          </Link> </Logo>
          {
            routes.map((route, index) => (
              <MenuOption key={index}>
                {
                  route.external && router.pathname === '/'
                    ? <a href={ route.href }>{ route.name }</a>
                    : <Link href={ route.href }>{ route.name }</Link>
                }
              </MenuOption>
            ))
          }
          <LangBtn onClick={() => {
            const newLang = isSpanish ? 'en' : 'es'
            i18n.changeLanguage(newLang)
            setIsSpanish(!isSpanish)
          }}>
            {isSpanish ? (
              <img src='/images/spain-flag.png' alt="ES Icon" />
            ) : (
              <img src='/images/en-flag.png' alt="EN Icon" />
            )}
          </LangBtn>
        </nav>
      </Container>
      <Link href="/contacto">
        <ContactBtn>
          <Image src='/icons/contact-icon.svg' alt="Contact Icon" width={16} height={16} />
          <span>{t('contact_me')}</span>
        </ContactBtn>
      </Link>
    </>
  )
}

export default NavDesktop

