import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container, List, Tech, Text } from './styles'

const techsCards = [
  {
    img: '/images/react-logo.png',
    alt: 'React Logo'
  },
  {
    img: '/images/next-logo.png',
    alt: 'Strapi Logo'
  },
  {
    img: '/images/angular.png',
    alt: 'Strapi Logo'
  },
  {
    img: '/images/python.png',
    alt: 'Google Cloud Logo'
  },
  {
    img: '/images/node-logo.png',
    alt: 'Docker Logo'
  },
  {
    img: '/images/atlassian-logo.jpg',
    alt: 'atlassian Logo'
  },
  {
    img: '/images/aws-logo.png',
    alt: 'AWS Logo'
  },
  {
    img: '/images/google-cloud.png',
    alt: 'Google Cloud Logo'
  },
  {
    img: '/images/docker.png',
    alt: 'Docker Logo'
  },
  {
    img: '/images/node-logo.png',
    alt: 'Docker Logo'
  },
  {
    img: '/images/atlassian-logo.jpg',
    alt: 'atlassian Logo'
  },
  {
    img: '/images/aws-logo.png',
    alt: 'AWS Logo'
  },
  {
    img: '/images/google-cloud.png',
    alt: 'Google Cloud Logo'
  },
  {
    img: '/images/docker.png',
    alt: 'Docker Logo'
  },
  {
    img: '/images/node-logo.png',
    alt: 'Docker Logo'
  },
  {
    img: '/images/atlassian-logo.jpg',
    alt: 'atlassian Logo'
  },
  {
    img: '/images/aws-logo.png',
    alt: 'AWS Logo'
  },
  {
    img: '/images/google-cloud.png',
    alt: 'Google Cloud Logo'
  },
  {
    img: '/images/docker.png',
    alt: 'Docker Logo'
  },
  
]


const Techs = () => {
  const [isShow, setIsShow] = useState(false)
  const [isHover, setIsHover] = useState(false)

  useEffect(() => {
    const observer: any = new IntersectionObserver(function(entries) {
      setIsShow(entries[0].intersectionRatio === 1)
      // if (entries[0].intersectionRatio === 1) {
      //   setIsShow(true)
      // }
    }, { threshold: 1 })
    observer.observe(document.querySelector('#techs'))
  }, [])

  return (
    <div id="techs" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <Container isActive={isShow || isHover}>
        <Text>
          <label>Tecnologías</label>
          <h2>Habilidades & Tecnologías</h2>
          <p><pre>
            Tengo habilidades avanzadas en <b>Javascript</b>, <b>Typescript</b>, <b>React.js</b>, <b>Vue.js</b> y <b>Next.js</b>.
            También tengo experiencia en <b>Angular</b>, <b>Django</b>, <b>MySQL</b>, <b>PostgreSQL</b> y <b>MongoDB</b>.
            Utilizo herramientas como <b>Git</b>, <b>Trello</b>, <b>Jira</b>, <b>Confluence</b>, <b>Slack</b> y <b>AWS</b>.
          </pre></p>
        </Text>
        <List>
          {techsCards.map((card, index) => (
            <Tech key={index}>
              <Image src={card.img} alt={card.alt} fill />
            </Tech>
          ))}
        </List>
      </Container>
    </div>

  )
}

export default Techs