import { useState } from 'react'
import './NewFormInput.css'

const NewFormInput = (props) => {

  const [focused, setFocused] = useState(false)

  const doFocused = () => {
    setFocused(true)
  }
  return (
    <div className='Formal'>
        <label>
          {props.placeholder}
        </label>
        <input
          type={props.type} 
          name={props.name}
          onChange={props.handleChange}
          required={props.required}
          pattern={props.pattern}
          placeholder={props.placeholder}
        onFocus={() => props.name === 'confirmPassword' && setFocused(true)}
          focus = {focused.toString()}
          onBlur={doFocused}
        />
        <span>{props.errMsg}</span>
    </div>
    
  )
}


export default NewFormInput
