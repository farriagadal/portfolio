
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
  
  return (
    <>
      { isMobile && isReady ? <NavMobile /> : <NavDesktop /> }
    </>
  )
}

export default Header