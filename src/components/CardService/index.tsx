import { Container, IconMore, IconWrapper } from './styles'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'
import IconPlus from 'public//icons/arrow-down.svg'

type CardServiceProps = {
  Icon: any,
  title?: string,
  description?: string,
  url?: string
}


const CardService = ({ Icon, title, description, url = '/' }: CardServiceProps) => {
  const [isHover, setIsHover] = useState(false)
  
  return (
    <Container isActive={isHover} onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <IconWrapper isActive={isHover}>
        {/* <Icon /> */}
        <img src="images/rocket.png" alt="" />
      </IconWrapper>
      <h4>{title}</h4>
      <p>
        {description}
      </p>
      <IconMore isActive={isHover}>
        <IconPlus />
      </IconMore>
      {/* <Link href={url} /> */}
    </Container>
  )
}

export default CardService