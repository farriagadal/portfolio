/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import { Container, Logo, Isotipo, MenuButton, MenuList, ContactBtn, CloseBtn } from './styles'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

type NavMobileProps = {
  routes: {
    name: string
    href: string
    external?: boolean
  }[]
}

const NavMobile = ({ routes }: NavMobileProps) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()

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
            <Link href="/contacto"><ContactBtn>
              <span>Trabajemos juntos!</span>
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