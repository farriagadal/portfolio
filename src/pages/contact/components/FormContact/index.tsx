import { Container, BtnContact, Fields } from './styles'
import { useForm } from 'react-hook-form'
import InputText from '../InputText'
import IconWeb1 from 'public/icons/web.svg'
import IconWeb2 from 'public/icons/software-icon.svg'
import IconWeb3 from 'public/icons/phone.svg'
import IconWeb4 from 'public/icons/chat.svg'

import ContactServices from 'src/pages/contact/components/ContactServices'
import { useState } from 'react'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'


const cardServices = [
  {
    title: 'Sitios web corporativos',
    Icon: IconWeb1
  },
  {
    title: 'Software a medida (SAAS)',
    Icon: IconWeb2  },
  {
    title: 'Aplicaciones móviles',
    Icon: IconWeb3  },
  {
    title: 'Asesoría en tecnología',
    Icon: IconWeb4
  }
]

const FormContact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ mode: 'all', reValidateMode: 'onChange', })
  const [isIntialited, setIsIntialited] = useState(false)
  const router = useRouter()

  const onSubmit = (data: any) =>{
    const templateParams = {
      ...data
    }
    emailjs.send('gmail', 'template_r70dzna', templateParams, 'user_Z9ZA15CBTB3P6Kw6xRIeQ')
      .then(() => {
        router.push('/gracias')
      }, () => {
        router.push('/error')
      })
  }

  const handleError = () => {
    setIsIntialited(true)
  }

  return (
    <Container>
      <h2>Ingresa tus datos</h2>
      <form onSubmit={handleSubmit(onSubmit, handleError)}>
        <Fields>
          <InputText
            label="Nombre*"
            register={{...register('firstname', { required: ' ' })}}
            error={errors.firstname?.message}
          />
          <InputText
            label="Apellido*"
            register={{...register('lastname', { required: ' ' })}}
            error={errors.lastname?.message}
          />
          <InputText
            label="Celular"
            register={{...register('phone')}}
            error={errors.phone?.message}
          />
          <InputText
            label="Email*"
            placeholder=''
            register={{...register('email', {
              required: ' ',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Ingresa un correo válido',
              }
            })}}
            error={errors.email?.message}
          />
          <InputText
            label="Asunto*"
            register={{...register('services', { required: ' ' })}}
            error={errors.services?.message}
          />
        </Fields>
        <BtnContact isDisabled={Object.keys(errors).length !== 0 && isIntialited} type='submit'>ENVIAR</BtnContact>
      </form>
    </Container>
  )
}

export default FormContact