import '../../style/MainWindow.css'
import {Link} from "react-router-dom";

function MainWindow() {
    return(
        <div className="Main">
            <h1 className="label">UpMail</h1>
            <p>Maecenas augue odio, imperdiet sollicitudin ullamcorper eget, pharetra nec mi. Donec a sodales dui. Mauris scelerisque odio ipsum, a venenatis nulla ultrices ac. Suspendisse vel ipsum sit amet orci ultrices cursus et et erat. Duis aliquet nisi magna, scelerisque semper diam facilisis at. Aliquam urna purus, egestas et lacus sit amet, mollis gravida tortor. Nullam felis ligula, varius vel mattis non, tincidunt et nibh. Praesent vehicula metus ut tristique varius.</p>
            <div className="button">

                <Link to="/login"><button id="login_button">Login</button></Link>
                <button id="login_button">Registration</button>

            </div>
        </div>
    );

}

export default MainWindow;

