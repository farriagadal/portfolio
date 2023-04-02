import { Container, BtnContact, Fields } from './styles'
import { useForm } from 'react-hook-form'
import InputText from '../InputText'
import { useState } from 'react'
import { useRouter } from 'next/router'
import emailjs from 'emailjs-com'
import { useTranslation } from 'react-i18next'


const FormContact = () => {
  const { t } = useTranslation()
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
      <h2>{t('insert_info')}</h2>
      <form onSubmit={handleSubmit(onSubmit, handleError)}>
        <Fields>
          <InputText
            label={t('name') + '*'}
            register={{...register('firstname', { required: ' ' })}}
            error={errors.firstname?.message}
          />
          <InputText
            label={t('lastname') + '*'}
            register={{...register('lastname', { required: ' ' })}}
            error={errors.lastname?.message}
          />
          <InputText
            label={`${t('phone')}`}
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
                message: t('error_email'),
              }
            })}}
            error={errors.email?.message}
          />
          <InputText
            label={`${t('subject')}*`}
            register={{...register('services', { required: ' ' })}}
            error={errors.services?.message}
          />
        </Fields>
        <BtnContact isDisabled={Object.keys(errors).length !== 0 && isIntialited} type='submit'>{t('send')}</BtnContact>
      </form>
    </Container>
  )
}

export default FormContact