import React from 'react';
import '../../style/MailPost.css'
import '../../style/MailOpen.css'

function MailPost(props){
    console.log("🚀 ~ file: MailPost.jsx ~ line 6 ~ MailPost ~ props", props)
    return (
        <div className="MailItem" onClick={() =>  {
            debugger
            props.setPostData(props.post)
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