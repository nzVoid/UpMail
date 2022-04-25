import React, {useState} from 'react';
import '../../style/MailPost.css'
import ReactDOM from "react-dom/client";
import MailOpen from "../FullMail/MailOpen";


/*function OpenFullMail(props){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        ()
    )
}*/

const MailPost = (props) => {
    const [mail,setMail] = useState([
        {from: props.post.from, body: props.post.body, date: props.post.date},
    ])
    return (
        <div className="MailItem" onClick={() => {
            (mail.map(post => {
                    const root = ReactDOM.createRoot(document.getElementById('root'));
                    root.render(
                        <MailOpen post={post}></MailOpen>
                    )
            })
            )
            }
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