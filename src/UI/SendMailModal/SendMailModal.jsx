import React, {useState} from 'react';
import './SendMailModal.css'
import SendMailModalFull from "./SendMailModalFull";

const SendMailModal = ({active, setActive}) => {
    const closeModal = () => {
        setActive(false)
    }
    //const [sendModalActive, setSendMailActive] = useState(false)
    return (
        <div className={active ? "SendMailModal active" : "SendMailModal"}>
            <div className="SenMail_NavItem">
                {/*<div className="showFull">↗</div>
                <div className="closeButton" onClick={closeModal}>&times;</div>*/}
                <ul className="navUl">
                    <li onClick={() => {
                        //setActive(false)

                    }}>↗</li>
                    <li onClick={closeModal}>&times;</li>
                </ul>
            </div>
            <div className="SendMail_content" onClick={e => e.stopPropagation()}>
                <input placeholder="Кому" className="fromInp"/>
                <input placeholder="Тема" className="topicInp"/>
                <textarea className="bodyInp"/>
            </div>
            {/*<SendMailModalFull setActive={setSendMailActive} active={sendModalActive}/>*/}
        </div>
    );
};
//onClick={() => {setActive(false)}
export default SendMailModal;