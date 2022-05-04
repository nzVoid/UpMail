import React, {useState} from 'react';
import '../../style/LeftMenu.css'
import Btn from "../Button/Btn";
import SendMailModal from "../SendMailModal/SendMailModal";

const LeftMenu = () => {
    const [modalSendActive, setModalSendActive] = useState(false);

    return (
        <div className="widget">
            <ul className="widget-list">
                <Btn children={"Напишите"} onClick={() => {
                    setModalSendActive(true)
                }}></Btn>
                <li><a href="inbox">Входящие</a></li>
                <li><a href="">Отправленные</a></li>

            </ul>

            <SendMailModal
                           active={modalSendActive}
                           setActive={setModalSendActive}>
            </SendMailModal>
        </div>
    );
};

export default LeftMenu;