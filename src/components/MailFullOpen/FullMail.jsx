import React from 'react';
import LeftMenu from "../../UI/LeftMenu/LeftMenu";
import Navbar from "../../UI/Navbar/Navbar";
import '../../style/FullMail.css'


const FullMail = (props) => {
    return (
        <div>
            <LeftMenu></LeftMenu>
            <Navbar></Navbar>
        </div>
    );
};

export default FullMail;