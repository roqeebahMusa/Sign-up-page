import { useState } from 'react'
import './App.css'
import NewFormInput from './Components/NewFormInput'

function App() {
  const [value, setValue] = useState({
    name: "",
    email: "",
    address:"",
    password: "",
    confirmPassword: "",
    admin: false,
  })

  const inputs =[
   {
    id: 1,
    placeholder: "Name",
    type: "text",
    name: "name",
    required: true,
    errMsg: "name has to be at least 3 characters and not more than 20 characters and must start with a letter",
    pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{3,20}`
  },
  {
    id: 2,
    placeholder: "E-mail",
    type: "email",
    name: "email",
    errMsg: "email has to be valid",
    required: true,
  },
  {
    id: 3,
    placeholder: "Address",
    type: "address",
    name: "address",
  },
  {
    id: 4,
    placeholder: "Password",
    type: "text",
    name: "password",
    errMsg: `At least 8 characters, min 1 Uppercase 1 Lowercase 1 Number 1 special character`,
    required: true,
    pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$`
  },
  {
    id: 5,
    placeholder: "Confirm Password",
    type: "text",
    name: "confirmPassword",
    errMsg: "must match password",
    required: true,
    pattern: value.password
  }
]

const handleChange= e =>{
  setValue({...value, [e.target.name]: e.target.value});
}

const receiveValues =(e)=>{
  e.preventDefault()
  console.log(value)
}

  return (
    <main className="App" >
      <form onSubmit={receiveValues}>
        <h2 className='p'>Sign Up</h2>
        {inputs.map((input)=>
      <NewFormInput key={input.id} {...input} handleChange={handleChange} value={value[input.name]}/>
      )}
      <input type="checkbox" onChange={() => setValue ({...value, admin: true})} />
        <button className='Sub' type="submit">
          Submit
        </button>
      </form>
    </main>
  )
}

export default App