import React from "react";
import './style.css';
const SignUp =()=> {
    const handleInput = () =>{

    }
    return(
        <form className="container">
            <h1>Sign Up</h1>
            <div className="inputs">
                <input type="text"placeholder="Name" onChange={handleInput} />
                <input type="email"placeholder="email" onChange={handleInput} />
                <input type="password"placeholder="password" onChange={handleInput} />
            </div>
            <button>SignUp</button>
        </form>
    )
}