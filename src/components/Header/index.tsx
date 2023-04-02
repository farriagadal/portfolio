import { useEffect, useState } from 'react'
import NavDesktop from '../NavDesktop'
import NavMobile from '../NavMobile'
import { useTranslation } from 'react-i18next'

const Header = () => {
  const { t } = useTranslation()
  const [isMobile, setIsMobile] = useState(false)
  const [isReady, setIsReady] = useState(false)

  useEffect(() => {
    setIsMobile(window.innerWidth < 1300)
    setIsReady(true)

    const handleResize = () => {
      setIsMobile(window.innerWidth < 1300)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const routes = [
    { name: t('menu_home'), href: '/' },
    { name: t('menu_about'), href: '/#ourvalues', external: true },
    { name: t('menu_skills'), href: '/#techs' , external: true }
  ]

  return (
    <>
      { isMobile && isReady ? <NavMobile routes={routes} /> : <NavDesktop routes={routes}  /> }
    </>
  )
}

export default Header
