import '../../style/MainWindow.css'
import {render} from "react-dom";
import LoginForm from "../Login/LoginForm";
import ReactDOM from "react-dom/client";

const LogForm = (e) => {
    e.preventDefault()
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        LoginForm()
    )
}

function MainWindow() {
    return(
        <div className="Main">
            <h1 className="label">UpMail</h1>
            <p>Maecenas augue odio, imperdiet sollicitudin ullamcorper eget, pharetra nec mi. Donec a sodales dui. Mauris scelerisque odio ipsum, a venenatis nulla ultrices ac. Suspendisse vel ipsum sit amet orci ultrices cursus et et erat. Duis aliquet nisi magna, scelerisque semper diam facilisis at. Aliquam urna purus, egestas et lacus sit amet, mollis gravida tortor. Nullam felis ligula, varius vel mattis non, tincidunt et nibh. Praesent vehicula metus ut tristique varius.</p>
            <div className="button">
                <button id="login_button" onClick={LogForm}>Login</button>
                <button id="login_button">Registration</button>
            </div>
        </div>

    );
}

export default MainWindow;

