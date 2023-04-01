
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

  const routes = [
    { name: 'Inicio', href: '/' },
    { name: '¿Quién soy?', href: '/#ourvalues', external: true },
    { name: 'Tecnologías', href: '/#techs' , external: true }
  ]

  return (
    <>
      { isMobile && isReady ? <NavMobile routes={routes} /> : <NavDesktop routes={routes}  /> }
    </>
  )
}

export default Header