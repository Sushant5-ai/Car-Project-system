import React, { useState } from 'react'
import'./style.css';
 
 const SignUp = () => {
  const data = {
    name:"",
    email:"",
    password:""
  }
  const [inputData, setInputData] = useState(data)
   const [msg, setMsg] = useState(false)
  
  const handleInput = (event) =>{
    
     
    setInputData({...inputData, [event.target.name]:event.target.value})
    
  }
   
  const submit = (event) =>{
    event.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password){
      alert("All Fields are Mandatory!")
      
    }else{
      setMsg(true)
      setTimeout(()=>{
        setMsg(false)
      },4000)
    }
  }
   
  
  
   return (
      <form onSubmit={submit} className='container'>
      <h2>{msg? inputData.name+" : SignUp Successfully!" : null}</h2>
      
        <h1>Registeration</h1>
        <div className='inputs'>
          <input type='text' placeholder='Name' name="name" value={inputData.name} onChange={handleInput} />
          <input type='email' placeholder='Email' name="email" value={inputData.email} onChange={handleInput} />
          <input type='password' placeholder='Passsword' name="password" value={inputData.password} onChange={handleInput} />
        </div>
        <button onClick={submit}>SignUp</button>
      </form>
   )
 }
 
 export default SignUp