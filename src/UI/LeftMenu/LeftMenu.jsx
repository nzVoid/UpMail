import React, {useState} from 'react';
import '../../style/LeftMenu.css'
import Btn from "../Button/Btn";
import Profile from "../../components/Profile/Profile";
import SendMailModal from "../SendMailModal/SendMailModal";

const LeftMenu = () => {
    const [SendMailModalActive, setMailSendModalActive] = useState(false)
    return (
        <div className="widget">
            <ul className="widget-list">
                <Btn children={"Напишите"} onClick={() => {
                    setMailSendModalActive(true)
                }}></Btn>
                <li><a href="inbox">Входящие</a></li>
                <li><a href="">Отправленные</a></li>
            </ul>
            <SendMailModal active={SendMailModalActive} setActive={setMailSendModalActive}></SendMailModal>
        </div>
    );
};

export default LeftMenu;