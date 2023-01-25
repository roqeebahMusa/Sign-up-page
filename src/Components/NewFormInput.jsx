import { useState } from 'react'
import './NewFormInput.css'

const NewFormInput = (props) => {

  const [main, setMain] = useState(false)

  const getMain = () => {
   setMain(true)
  }

  return (
    <div className='Formal'>
        <label>
          {props.placeholder}
        </label>
        <input
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        onChange={props.handleChange}
        pattern={props.pattern}
        required={props.required}
        focus = {main.toString()}
        onBlur={getMain}
        onFocus={() => props.name === 'confirmpassword' && setMain (true)}
        />

        <span className='err'>{props.errMsg}</span>
    </div>
    
  )
}


export default NewFormInput
