/* eslint-disable @next/next/no-html-link-for-pages */
import Link from 'next/link'
import { Container, Logo, Isotipo, MenuButton, MenuList, ContactBtn, CloseBtn } from './styles'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/router'

const NavMobile = () => {
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
              router.pathname === '/' ?
                <>
                  <a href="/#techs">Stacks</a>
                  <a href="/#ourvalues">¿Quien soy?</a>
                  <a href="/#content">Experiencia</a>
                </>
                :
                <>
                  <Link href="/#techs">Stacks</Link>
                  <Link href="/#ourvalues">¿Quien soy?</Link>
                  <Link href="/#content">Experiencia</Link>
                </>
            }
  
            <Link href="/contacto"><ContactBtn>
              <span>Contacto</span>
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