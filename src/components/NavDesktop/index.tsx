/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import { Container, Logo, MenuOption, ContactBtn, ThemeButton } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

type NavDesktopProps = {
  routes: {
    name: string
    href: string
    external?: boolean
  }[]
}

const NavDesktop = ({ routes }: NavDesktopProps) => {
  const [isTop, setIsTop] = useState(true)
  const router = useRouter()

  useEffect(() => {
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
        </nav>
      </Container>
      <Link href="/contacto">
        <ContactBtn>
          <Image src='/icons/contact-icon.svg' alt="Contact Icon" width={16} height={16} />
          <span>Contactame</span>
        </ContactBtn>
      </Link>

    </>
    

  )
}

export default NavDesktop