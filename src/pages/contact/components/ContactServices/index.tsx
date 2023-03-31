
import { Container, List } from './styles'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import CardService from '../CardService'
import { useState } from 'react'

type ContactServicesProps = {
  services: any[],
  servicesSelected: any[],
  onChange: (data: any[]) => void
}

const ContactServices = ({services, onChange}: ContactServicesProps) => {
  const [servicesSelected, setServicesSelected] = useState<any[]>([])

  const handleService = (service: string) => {
    const newServices = servicesSelected.includes(service) ? servicesSelected.filter(s => s !== service) : [...servicesSelected, service]
    setServicesSelected(newServices)
    onChange(newServices)
  }

  return (
    <Container>
      <h2>Selecciona un servicio</h2>
      <List>
        <Splide options={{
          perPage: 4,
          rewind: false,
          arrows: false,
          width : '100%',
          gap   : '31px',
          pagination: false,
          drag: false,
          // dragMinThreshold: 0,
          // flickPower: 500,
          breakpoints: {
            640 : {
              dragMinThreshold: 10,
              flickPower: 10,
              gap: '30px',
              perPage: 1,
              drag: true,
              padding: { right: '20px' }
            },
          },
        }}>
          {services.map((card, index) => (
            <SplideSlide key={index}>
              <CardService {...card} onChange={handleService}  />
            </SplideSlide>
          ))}
        </Splide>
      </List>
    </Container>
  )
}

export default ContactServices