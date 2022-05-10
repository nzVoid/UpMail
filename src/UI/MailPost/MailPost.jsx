import React from 'react';
import '../../style/MailPost.css'
import '../../style/MailOpen.css'

function MailPost(props){
    return (
        <div className="MailItem" onClick={() =>  {
            /*debugger*/
            props.setPostData(props.post)
        }}>
           <div className="mailContent">
               <div className="leftItemPost">
                   <span className="itemLeftMail">{props.post.from}</span>
                   <span className="itemLeftMail">{props.post.body}</span>
               </div>
               <div className="rightItemPost">
                   <span >{props.post.date}</span>
               </div>
           </div>
       </div>
    );
};

export default MailPost;