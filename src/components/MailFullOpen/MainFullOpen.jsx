import React from 'react';
import '../../style/MainFullOpen.css'

const MainFullOpen = ({active, setActive}) => {
    return (
        <div onClick={() => {setActive(false)}} className={active ? "MailModal active" : "MailModal"} >
            <div className="modal_content" onClick={e => e.stopPropagation()}>
                <h1 className="userLogin">nzVoid</h1>
                <div className="separator"></div>
                <div className="userData">
                    <span className="userDataItem">ВУЗ: ЧКИРУК</span><br></br>
                    <span className="userDataItem">ФИО: Якунин Максим Романович</span><br></br>
                    <span className="userDataItem">Группа: ПИ(ПИУ)1-О/Бп/ЧБ21</span>
                </div>
            </div>
        </div>
    );
};

export default MainFullOpen;