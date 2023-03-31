import { Container, IconWrapper } from './styles'
import Image from 'next/image'
import { useState } from 'react'
import Link from 'next/link'

type CardServiceProps = {
  Icon: any,
  title: string,
  onChange: (service: string) => void
}


const CardService = ({ Icon, title, onChange }: CardServiceProps) => {
  const [isSelected, setIsSelected] = useState(false)
  
  const handleClick = () => {
    setIsSelected(!isSelected)
    onChange(title)
  }

  return (
    <Container isActive={isSelected} onClick={() => handleClick()}>
      <IconWrapper><Icon /></IconWrapper>
      <h4>{title}</h4>
    </Container>
  )
}

export default CardService