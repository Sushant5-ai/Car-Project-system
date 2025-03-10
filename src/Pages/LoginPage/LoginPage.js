import React, { useState } from "react";
import CustomInput from '../../components/CustomInput/CustomInput';
import COLOR from "../../config/color";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import "./style.css";
function LoginPage() {
  const [email, setEmail] = useState('@gmail.com');

    return (
      <div className="loginpagebasecontainer">
        <div className="loginpageContentContainer">
             <div className="loginpageContenTitleContainer">
                <h1>Welcome back</h1>
                 <h5>Pleace login to your account</h5>
                {/* <h1>LogIn</h1> */}
             </div>
             <div className="loginpageContentInputCntainer">
              <CustomInput 
               type ={email}
               placeholder = {"Enter Email"}
               Icon={FaUserAlt}
               inputValue = {email}
               onChangeText={(e) =>{ setEmail(e.target.value)}}
             />
              <CustomInput 
                type={"password"}
                placeholder={"Enter Password"}
                Icon={FaKey}
                isSecureEntry={true}
            />
         </div>
           <div>
             <a href="#">Forgot?</a>
           </div>
           <div className="loginPageContentButtonContainer">
             <button type="submit">Login</button>
           </div>
         <div className="loginPageContentRegisterContainer"></div>
       </div>
     </div>
    );
}
export default LoginPage;