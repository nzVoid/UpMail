import React from 'react';
import '../../style/MailPost.css'
import {render} from "react-dom";
import Navbar from "../Navbar/Navbar";
import LeftMenu from "../LeftMenu/LeftMenu";
import {useNavigate} from "react-router";

function MailOpen(props){
    render(
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
        </div>, document.getElementById("root")
    )
}



function MailPost(props){
    return (
        <div className="MailItem" onClick={() => MailOpen(props)
       }>
           <div className="mailContent">
               <span className="itemLeftMail">{props.post.from}</span>
               <span className="itemLeftMail">{props.post.body}</span>
               <span className="itemRightMail">{props.post.date}</span>
           </div>
       </div>
    );
};

export default MailPost;