import React from 'react';
import ReactDOM from "react-dom/client";
import Main from "../components/Main/Main";
import MailOpen from "../UI/FullMail/MailOpen";

const Mail = (props) => {
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <MailOpen ></MailOpen>
    )
};

export default Mail;