import React, {useState} from 'react';
import '../../style/Navbar.css'
import Profile from "../../components/Profile/Profile";


const Navbar = () => {
    const [ProfileModalActive, setProfileModalActive] = useState(false)
    return (
        <div className="nav">
            <nav>
                <ul>
                    <li><a className="nav_link" href="src/UI/Navbar/Navbar#">UpMail</a></li>
                    <li className="rightItem"><a href="#" className="nav_link" onClick={() => {setProfileModalActive(true)}}>Profile</a></li>
                </ul>
            </nav>

            <Profile active={ProfileModalActive} setActive={setProfileModalActive}></Profile>
        </div>
    );
};

export default Navbar;