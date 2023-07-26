import { useEffect, useState } from 'react'
import { Container } from './styles'

const Loader = () => {
  const [isOpen, setIsOpen] = useState(true)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(false)

      // Agregar otro setTimeout para esperar el tiempo de la animación (1s en este caso) 
      // antes de cambiar el estado isVisible a false.
      setTimeout(() => {
        setIsVisible(false)
      }, 400) // Esperar la duración de la animación (1 segundo en nuestro caso)

    }, 1000) 
  }, [])

  // No renderizar el componente si isVisible es false
  if (!isVisible) return null

  return (
    <Container className={isOpen ? '' : 'fade-out'}>
      <img src="/icons/bars.svg" />
    </Container>
  )
}

export default Loader
