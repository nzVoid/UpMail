import React from 'react';
import './styles.css';
import Navbar from "../Navbar/Navbar";
import LeftMenu from "../LeftMenu/LeftMenu";

class Modal extends React.Component {
    onClose = () => {
        this.onClose();
    }

    render() {
        return (
            <div>
                <Navbar></Navbar>
                <LeftMenu></LeftMenu>
                <div className="mailOpen">
                    <div className="mailFullContent">
                        <span className="close" onClick={this.onClose} >&times;</span>
                        <span>From: {this.props.post.from}</span><br/>
                        <div className="separator"></div>
                        <span>Message: {this.props.post.body}</span><br/>
                        <div className="separator"></div>
                        <span>Date: {this.props.post.date}</span><br/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Modal;