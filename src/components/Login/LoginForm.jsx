import React from "react";
import '../../style/LoginForm.css'
import {Link} from "react-router-dom";
import {render} from "react-dom";

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
                    <Link to="/inbox"><button id="loginForm_button">Login</button></Link>
                </div>
            </div>

        </div>
    );
    /*render(
        <div className="Login_Form">
            <h1 className="label_login">Login</h1>
            <div className="main_block">
                <label><b>Login</b></label><p></p>
                <input className="LoginInput"/><p></p>
                <label><b>Password</b></label><p></p>
                <input className="LoginInput"/>
                <div className="buttonBlock">
                    <Link to="/inbox"><button id="loginForm_button">Login</button></Link>
                </div>
            </div>

        </div>, document.getElementById("root")
    )*/
};

export default LoginForm;
