import React, {useState} from 'react';
import '../../style/Navbar.css'
import Profile from "../../components/Profile/Profile";


const Navbar = () => {
    const [ProfileModalActive, setProfileModalActive] = useState(false)
    return (
        <div className="nav">
            <div className="leftNav">
                <a className="nav_link" href="/">UpMail</a>
            </div>
            <div className="rightNav">
                <a href="#" className="nav_link" onClick={() => {
                    setProfileModalActive(true)}
                }>Profile</a>
            </div>
            <Profile active={ProfileModalActive} setActive={setProfileModalActive}></Profile>
        </div>
    );
};
/*
<a className="nav_link" href="/">UpMail</a>
<a href="#" className="nav_link" onClick={() => {setProfileModalActive(true)}}>Profile</a>
*/
export default Navbar;