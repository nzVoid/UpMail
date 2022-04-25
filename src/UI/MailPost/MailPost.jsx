import React from 'react';
import '../../style/MailPost.css'

const MailPost = (props) => {
    return (
        <div className="MailItem">
            <div className="mailContent">
                <span>{props.post.from}</span>
                <span>{props.post.body}</span>
                <span>{props.post.date}</span>
            </div>
            
        </div>
    );
};

export default MailPost;