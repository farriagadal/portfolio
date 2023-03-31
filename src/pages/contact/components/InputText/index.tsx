import { useState } from 'react'
import { Container, Label } from './styles'
// import { useState, useEffect } from 'react'

interface IPropsInputText {
  label?: string;
  placeholder?: string;
  register?: any;
  error: any;
}

const InputText = ({ label, placeholder, register, error }: IPropsInputText) => {
  const [value, setValue] = useState('')
  
  const handleChange = (event: any) => {
    setValue(event.target.value)
    event.target.name = register?.name
    register?.onChange(event)
  }

  return (
    <Container error={!!error}>
      <Label isEmpty={!value}>{label}</Label>
      <input value={value} {...register} onChange={handleChange} />
    </Container>
  ) 
}

export default InputText
