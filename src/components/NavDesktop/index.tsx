import Link from 'next/link'
import { Container, Logo, MenuOption } from './styles'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const NavDesktop = () => {
  const [isTop, setIsTop] = useState(true)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      // // no intersection with screen
      // if(entries[0].intersectionRatio === 0)
      //   console.log('arriba')
      // // fully intersects with screen
      // else if(entries[0].intersectionRatio === 1)
      //   setIsTop(true)

      setIsTop(entries[0].intersectionRatio === 1)
    }, { threshold: [0,1] })

    observer.observe(document.querySelector('#indicator'))
  }, [])
  
  return (
    <>
      <div id="indicator" />
      <Container isTop={isTop}>
        <nav>
          <Logo>
            <Link href="/" className="full-logo">
              <Image src='/icons/logo.svg' alt="SeedLab Logo" width={245} height={46} />
            </Link>
            <Link href="/" className="short-logo">
              <Image src='/icons/short-logo.svg' alt="SeedLab Logo" width={133} height={19} />
            </Link>
            <Link href="/" className="short-logo-black">
              <Image src='/icons/short-logo-black.svg' alt="SeedLab Logo" width={133} height={19} />
            </Link>
          </Logo>
          <MenuOption><Link href="#">Servicios</Link></MenuOption>
          <MenuOption><Link href="#">Nuestro Valor</Link></MenuOption>
          <MenuOption><Link href="#">Como trabajamos</Link></MenuOption>
          <MenuOption><Link href="#">Tecnologías</Link></MenuOption>
        </nav>
      </Container>
    </>
    

  )
}

export default NavDesktop