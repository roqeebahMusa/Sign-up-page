import { useState } from 'react'
import './App.css'
import NewFormInput from './Components/NewFormInput'

function App() {

  const [info, setInfo] = useState({
    name:"",
    email:"",
    address:"",
    password:"",
    confirmPassword:"",
    admin: false,
  })

  const handleChange = e => {
    setInfo({...info,[e.target.name] : e.target.info})
  }
const inputs = [
  {
     id: 1,
     placeholder: "Name",
     type: "text",
     name: "name",
     errMsg: "Name has to be at least 5 characters and not more than 25 characters and must begin with uppercase",
  required: true,
  pattern: `[a-zA-Z][a-zA-Z0-9-_. ]{5,25}`
  },

  {
    id: 2,
    placeholder: "Email",
    type: "text",
    name: "email",
    errMsg: "Your email must be Valid",
    required: true
 },

 
 {
  id: 3,
  placeholder: "Address",
  type: "text",
  name: "address",
},

{
  id: 4,
  placeholder: "Password",
  type: "text",
  name: "password",
  errMsg: "At least 10 characters, min 2 uppercase 2 lowercase, symbol must be included, number must also be included",
  required: true,
  pattern: `^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{10,}$`
},

{
  id: 5,
  placeholder: "Confirm Password",
  type: "text",
  name: "confirmpassword",
  errMsg: "Must match password",
  required: true,
  pattern: info.password
},
]

const getInfo = (e) => {
  e.PreventDefault()
  console.log(info)
}

  return (
    <main className="App" >
      <form onSubmit={getInfo}>
        <h2>SIGN UP</h2>
           {inputs.map((input) =>
         <NewFormInput key={input.id} {...input} handleChange={handleChange} info={info[input.name]}/>
        )} 
        <input type="checkbox" onChange={() => setInfo ({...info, admin: true})}/>
        <button className="Sub"  type='Submit'>Submit</button>
      </form>
  
    </main>
  )
}

export default App