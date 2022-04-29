import React from 'react';
import '../../style/MailPost.css'
import '../../style/MailOpen.css'

function MailPost(props){
    return (
        <div className="MailItem" onClick={() => {

        }}>
           <div className="mailContent">
               <span className="itemLeftMail">{props.post.from}</span>
               <span className="itemLeftMail">{props.post.body}</span>
               <span className="itemRightMail">{props.post.date}</span>
           </div>
       </div>
    );
};

export default MailPost;