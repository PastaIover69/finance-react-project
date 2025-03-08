import React from 'react'
import css from '../../styles/comps/form.css'

import Head from '../views/global/Head'
import Footer from '../views/global/Footer'
import InputComponent from '../comps/InputComponent'

const { FormContainer } = css

export default function Main() {
  return (
    <React.Fragment>
       <Head/>
       <FormContainer>
          <InputComponent/>
          <InputComponent/>
          <InputComponent/>
       </FormContainer>
       <Footer/>
    </React.Fragment>
  )
}
