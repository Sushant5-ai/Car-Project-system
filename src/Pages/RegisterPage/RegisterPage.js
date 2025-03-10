import React, { useState } from 'react'
import './style.css';
import CustomButton from '../../components/CustomButton/CustomButton';
 
 const RegisterPage = () => {
  const data = {
    name:"",
    email:"",
    password:"",
    Confirmpassword:"",
    
  }

  const [inputData, setInputData] = useState(data)
   const [msg, setMsg] = useState(false)
   
  
  const handleInput = (event) =>{
    console.log(event.target.name,event.target.value);
    
     
    setInputData({...inputData, [event.target.name]:event.target.value});
    
  
    
  };
   
  const submit = (event) =>{
    event.preventDefault();
    if(!inputData.name || !inputData.email || !inputData.password || ! inputData.Confirmpassword ){
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
      <h2>{msg? inputData.name+ ":Registration Successfully!" : null}</h2>
      
        <h1>RegisterForm</h1>
        <div className='inputs'>
          <input type='text' placeholder='Name'  name="name" value={inputData.name} onChange={handleInput} />
          <input type='email' placeholder='Email' name="email" value={inputData.email} onChange={handleInput} />
          <input type='password' placeholder='Passsword' name="password" value={inputData.password} onChange={handleInput} />
          <input type='password' placeholder='Confirm password' name="Confirmpassword" value={inputData.Confirmpassword}onChange={handleInput} />
        </div>
        <div className='customButtonContainer'>
          <CustomButton title={"Register"} />
        </div>
      </form>
  
   );
  };
   

 export default RegisterPage;