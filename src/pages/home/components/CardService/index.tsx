import { Container, IconMore } from './styles'
import Image from 'next/image'
import { useState } from 'react'
import IconWeb from 'public/icons/web-icon.svg'
import Link from 'next/link'

const CardService = () => {
  const [isHover, setIsHover] = useState(false)
  
  return (
    <Container isActive={isHover} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <IconWeb />
      <h4>Servicio lorem ipsum dolor.</h4>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.
      </p>
      <IconMore isActive={isHover}>
        <Image src='/icons/more-icon.svg' alt="Web Logo" width={25} height={25} />
      </IconMore>
      <Link href='/' />
    </Container>
  )
}

export default CardService