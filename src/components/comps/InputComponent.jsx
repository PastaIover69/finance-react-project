import React, {useState} from 'react'
import css from '../../styles/comps/form.css'

const { Input } = css

export default function InputComponent(props) {
  // Диструктуризация пропсов
  const { placeholder, maxLength } = props
  const [ inputValue, setInputValue ] = useState(0)

  return (
    <React.Fragment>
        <Input
          placeholder={placeholder}
          maxLength={maxLength}
          type='text'
          onChange={ event => {
            let newValue = event.target.value;
            setInputValue(newValue)
          }
            
          }
        />
        <span style={{textAlign : 'center'}}>
           {inputValue} руб.
        </span>
    </React.Fragment>
  )
}
