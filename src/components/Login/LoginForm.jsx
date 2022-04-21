import React from "react";
import ReactDOM from "react-dom/client";
import '../../style/LoginForm.css'
import Navbar from "../../UI/Navbar/Navbar";
import LeftMenu from "../../UI/LeftMenu/LeftMenu";
import Main from "../Main/Main";

function Enter(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Main></Main>
    )


}

const LoginForm = () => {
    return (
        <div className="Login_Form">
            <h1 className="label_login">Login</h1>
            <div className="main_block">
                <label><b>Login</b></label><p></p>
                <input className="LoginInput"/><p></p>
                <label><b>Password</b></label><p></p>
                <input className="LoginInput"/>
                <div className="buttonBlock">
                    <button id="loginForm_button" onClick={Enter}>Login</button>

                </div>
            </div>

        </div>
    );
};

export default LoginForm;
