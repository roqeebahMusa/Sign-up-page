import './NewFormInput.css'

const NewFormInput = (props) => {
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

        />
        <span>{props.errMsg}</span>
    </div>
    
  )
}


export default NewFormInput
