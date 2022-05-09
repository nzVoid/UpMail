import React from 'react';
import './SendMailModal.css'

const SendMailModal = ({active, setActive}) => {
    const closeModal = () => {
        setActive(false)
    }

    return(
        <div className={active ? "SendMailModal active" : "SendMailModal"}>
            <div className="SenMail_NavItem">
                <ul className="navUl">
                    <li>↗</li>
                    <li onClick={closeModal}>&times;</li>
                </ul>
            </div>
            <div className="SendMail_content" onClick={e => e.stopPropagation()}>
                <input placeholder="Кому" className="fromInp"/>
                <input placeholder="Тема" className="topicInp"/>
                <textarea className="bodyInp"/>
            </div>

        </div>
    );
};
//onClick={() => {setActive(false)}
export default SendMailModal;
