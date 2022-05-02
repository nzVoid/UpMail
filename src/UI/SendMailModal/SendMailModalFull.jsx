import React from 'react';
import './SendMailModal.css'
class SendMailModalFull extends React.Component{
    onClose = () => {
        this.props.onClose();
    }
    render(){
        return(
            <div onClick={this.onClose}>
                <div className="SenMail_NavItem">
                    <ul className="navUl">
                        <li>↗</li>
                        <li>&times;</li>
                    </ul>
                </div>
                <div className="SendMail_content" onClick={e => e.stopPropagation()}>
                    <input placeholder="Кому" className="fromInp"/>
                    <input placeholder="Тема" className="topicInp"/>
                    <textarea className="bodyInp"/>
                </div>

            </div>
        )
    };
};

export default SendMailModalFull;