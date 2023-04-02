import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Container, List, Tech, Text } from './styles'
import { useTranslation } from 'react-i18next'

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
    img: '/images/js.png',
    alt: 'Js Logo'
  },
  {
    img: '/images/typescript.jpg',
    alt: 'typescript Logo'
  },
  {
    img: '/images/vue.png',
    alt: 'Vue Logo'
  },
  {
    img: '/images/django.png',
    alt: 'django Logo'
  },
  {
    img: '/images/git.png',
    alt: 'Git Logo'
  },
  {
    img: '/images/mongo.jpg',
    alt: 'MongoDB Logo'
  },
  {
    img: '/images/laravel.png',
    alt: 'Laravel Logo'
  },
  {
    img: '/images/ga.png',
    alt: 'GA Logo'
  },
  {
    img: '/images/graphql.png',
    alt: 'graphql Logo'
  },
  {
    img: '/images/jest.png',
    alt: 'jest Logo'
  }
]


const Techs = () => {
  const { t } = useTranslation()
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
          <label>{t('techs')}</label>
          <h2>{t('techs_1')}</h2>
          <p>
            <pre dangerouslySetInnerHTML={{
              __html: t('techs_text')
            }} />
          </p>
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