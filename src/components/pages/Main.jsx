import React from 'react'
import css from '../../styles/comps/form.css'

import Head from '../views/global/Head'
import Footer from '../views/global/Footer'
import InputComponent from '../comps/InputComponent'

const { FormContainer, Button } = css

export default function Main() {
  return (
    <React.Fragment>
       <Head/>
       <FormContainer>
          <InputComponent 
          placeholder={'Введите сумму транзакции'}
          maxLength={10}
          />

          <InputComponent 
          placeholder={'Введите тип транзакции'}
          maxLength={20}
          />

          <InputComponent 
          placeholder={'Введите комментарий транзакции'}
          maxLength={30}
          />

          <Button backgroundColor={'rgb(225,225,225)'}>Сохранить транзакцию</Button>
       </FormContainer>
       <Footer/>
    </React.Fragment>
  )
}
