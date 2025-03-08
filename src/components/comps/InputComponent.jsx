import React from 'react'
import css from '../../styles/comps/form.css'

const { Input } = css

export default function InputComponent(props) {
  // Диструктуризация пропсов
  const { placeholder, maxLength } = props

  return (
    <React.Fragment>
        <Input
          placeholder={placeholder}
          maxLength={maxLength}
          type='text'
        />
    </React.Fragment>
  )
}
