import React from 'react';
import './styles.css';
import Navbar from "../Navbar/Navbar";
import LeftMenu from "../LeftMenu/LeftMenu";

class Modal extends React.Component {
    async componentDidMount() {
        const postId = this.props.modalPost;
        const res = await fetch(`http://localhost:3001/mailbox/${postId}`)
        const postData = await res.json();
        this.setState({
            postData
        })
    }

    state = {
        postData : {

        }
    }

    onClose = () => {
        this.props.onClose();
    }

    render() {
        return(
            <div>
                <Navbar></Navbar>
                <LeftMenu></LeftMenu>
                <div className="mailOpen">
                    <div className="mailFullContent">
                        <span className="close" onClick={this.onClose} >&times;</span>
                        <span>ID: {this.state.postData.from}</span><br/>
                        <div className="separator"></div>
                        <span>Message: {this.state.postData.body}</span><br/>
                        <div className="separator"></div>
                        <span>Date: {this.state.postData.date}</span><br/>
                    </div>
                </div>
            </div>
        );
    }
};

export default Modal;