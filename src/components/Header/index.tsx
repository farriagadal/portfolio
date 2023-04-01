
import { useEffect, useState } from 'react'
import NavDesktop from '../NavDesktop'
import NavMobile from '../NavMobile'

const Header = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1300)
    setIsReady(true)
  }, [])

  // const routes = [
  //   { name: 'Inicio', href: '/' },
  //   { name: 'Sobre mí', href: '/about' },
  //   { name: 'Proyectos', href: '/projects' },
  //   { name: 'Contacto', href: '/contact' },
  // ]

  // <MenuOption><a href="/#ourvalues">¿Quien soy?</a></MenuOption>
  // <MenuOption><a href="/#techs">Tecnologías</a></MenuOption>
  // <MenuOption><Link href="/contacto">Contacto</Link></MenuOption>
  
  return (
    <>
      { isMobile && isReady ? <NavMobile /> : <NavDesktop /> }
    </>
  )
}

export default Header