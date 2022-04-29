import React from 'react';
import '../../style/MailOpen.css'
import Navbar from "../Navbar/Navbar";
import LeftMenu from "../LeftMenu/LeftMenu";

const MailOpen = (props) => {
    return (
        <div>
            <Navbar></Navbar>
            <LeftMenu></LeftMenu>
            <div className="mailOpen">
                <div className="mailFullContent">
                    <span>From: {props.post.from}</span><br/>
                    <div className="separator"></div>
                    <span>Message: {props.post.body}</span><br/>
                    <div className="separator"></div>
                    <span>Date: {props.post.date}</span><br/>
                </div>
            </div>
        </div>
    );
};

export default MailOpen;