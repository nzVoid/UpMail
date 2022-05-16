import React from 'react';
import './SendMailModal.css'
const SendMailModal = ({active, setActive}) => {
    const closeModal = () => {
        setActive(false)
    }
    const sendMail = () =>{
        let id = (Math.floor(Math.random() * 99999999)).toString();
        let where = document.getElementById("fromInp").value
        let topic = document.getElementById("topicInp").value
        let body = document.getElementById("bodyInp").value
        try{
            fetch("http://localhost:3001/send", {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8'
                },
                body: JSON.stringify({
                    /*id: id,*/
                    where: where,
                    topic: topic,
                    body: body,
                })
            })
                .then(function (res){
                    return res.json()
                })
                .then((data)=>{
                    console.log(data)
                })
            setActive(false)
        }
        catch{

        }
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
                <input placeholder="Кому" id="fromInp"/>
                <input placeholder="Тема" id="topicInp"/>
                <textarea id="bodyInp"/>
                <button className="sendBtn" onClick={sendMail}>Send</button>
            </div>

        </div>
    );
};
export default SendMailModal;
