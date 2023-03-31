import CardService from '../CardService'
import { Container, List } from './styles'

const Services = () => {
  return (
    <Container>
      <h2>Nuestros servicios</h2>
      <List>
        <CardService />
        <CardService />
        <CardService />
        <CardService />
      </List>
    </Container>
  )
}

export default Services