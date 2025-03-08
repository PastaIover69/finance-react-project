import React from 'react'
import css from '../../styles/comps/form.css'

const { Input } = css

export default function InputComponent() {
  return (
    <React.Fragment>
        <Input
          placeholder='Введите сумму транзакции'
          maxLength={30}
          type='text'
        />
    </React.Fragment>
  )
}
