import React from 'react';
import './styles.css';

class Modal extends React.Component {
    onClose = () => {
        this.props.onClose();
    }

    render() {
        console.log("🚀 ~ file: Modal.jsx ~ line 11 ~ Modal ~ render ~ this.props", this.props)
        
        return (
            <div className="modal">
                <div className="modal-content">
                    <span className="close" onClick={this.onClose} >&times;</span>
                    {this.props.post.from}
                </div>
            </div>
        );
    }
};

export default Modal;