import React, { useState } from "react";
import CustomInput from '../../components/CustomInput/CustomInput';
import COLOR from "../../config/color";
import { FaUserAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import "./style.css";
function LoginPage() {
  const [email, setEmail] = useState('');

    return (
      <div className="loginpagebasecontainer">
        <div className="loginpageContentContainer">
             <div className="loginpageContenTitleContainer">
                <h1>Let's Connect</h1>
             </div>
             <div className="loginpageContentInputCntainer">
              <CustomInput 
               type ={"email"}
               placeholder = {"Enter Email"}
               Icon={FaUserAlt}
               inputValue = {email}
               onChange={(e) => setEmail(e.target.value)}
             />
              <CustomInput 
                type={"password"}
                placeholder={"Enter Password"}
                Icon={FaKey}
                setSecureEntry={true}
            />
         </div>
         <div className="loginPageContentButtonContainer"></div>
         <div className="loginPageContentRegisterContainer"></div>
       </div>
     </div>
    );
}
export default LoginPage;