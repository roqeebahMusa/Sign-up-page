import React, { useState } from 'react';

import "./Forminput.css";

import { AiOutlineEye } from "react-icons/ai";

function Forminput() {
  const [Password, setPassword] = useState(false);


  const visiblePassword = () => {
    setPassword(prevState => !prevState);
  };


  const [Data, setFormData] = useState({
    Name: "",
    LastName: "",
    Username: '',
    Email: '',
    Password: ''
  });

  const handleChange = event => {
    setFormData({
      ...Data,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    console.log(Data);
  };

  return (
    <div className='Main-App'>
      <h2>Login Form</h2>
      <form onSubmit={handleSubmit} className="formData">
        <label>
          <input
            placeholder='First Name'
            className='first'
            type="text"
            name="Name"
            value={Data.Name}
            onChange={handleChange}
          />
          <hr className='line'/>
        </label>
        <br />
        <label>
          <input
            placeholder='Last Name'
            className='first'
            type="text"
            name="LastName"
            value={Data.LastName}
            onChange={handleChange}
          />
          <hr className='line'/>
        </label>
        <br />
        <label>
          <input
            placeholder='User Name'
            className='first'
            type="text"
            name="username"
            value={Data.Username}
            onChange={handleChange}
          />
          <hr className='line'/>
        </label>
        <br />
        <label>
          <input
            placeholder='Email'
            className='first'
            type="email"
            name="email"
            value={Data.Email}
            onChange={handleChange}
          />
          <hr className='line' />
        </label>
        <br />
      
       <label className='passWord' >
          <input
            placeholder='Password'
            className='first'
            type={Password ? "text" : "password"}
            name="password"
            value={Data.Password}
            onChange={handleChange}
          />
          <AiOutlineEye
          className='invisible'
            onClick={visiblePassword}
            type={Password ? "text" : "password"}
          />
        </label>
        <hr className='line'/>
        <br />
        <button type="submit" className='signbtn' >Sign Up</button>
      </form>
    </div>
  );
}

export default Forminput;