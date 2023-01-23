import Forminput from './Components/Forminput'
import "./App.css"

const App = () => {

  // const [value, setValue] = useState({
  //   userName : "",
  //   email : "",
  //   password : "",
  //   confirmPassword : "",
  // })

  // [
  //    {
  //   id: 1,
  //   placeholder: "User Name",
  //   type: "text",
  //   name: "User Name",
  // },

  // {
  //   id: 2,
  //   placeholder: "E-Mail",
  //   type: "text",
  //   name: "e-mail",
  // },

  // {
  //    id : 3,
  //    placeholder: "Password",
  //    type: "text",
  //    name: "Password",
  // },

  // {
  //   id : 4,
  //   placeholder: "confirm password",
  // }

  // ]

  return (
    <main className='App'>
      <form className='form'>
         <Forminput/>
      </form>
     
    </main>
  )
}

export default App