import React from 'react';
import LeftMenu from "../../UI/LeftMenu/LeftMenu";
import Navbar from "../../UI/Navbar/Navbar";
import MailPost from "../../UI/MailPost/MailPost";
import '../../style/Main.css'
import Modal from "../../UI/Modal/Modal";

class Main extends React.Component {
    componentDidMount = async () => {
        const res = await fetch('http://localhost:3001/mailbox')
        const dataResp = await res.json()
        this.setState({
            data: dataResp,
        })
    }
    setPostData = (dataRe) => {
        this.setState(
            {
                modalMailVisible: true,
                modalPost: dataRe
            }
        )
    }

    state = {
        modalMailVisible: false,
        modalPost: {},
        data: []
    }

    render() {
        return (
            <div>
                <LeftMenu></LeftMenu>
                <Navbar></Navbar>
                {this.state.modalMailVisible ? <Modal onClose={() => this.setState({ modalMailVisible: true })}
                    post={this.state.data }/> : null}
                <div className="postsMail">
                    {this.state.data.map(post =>
                        <MailPost post={post} setPostData={this.setPostData}></MailPost>
                    )}
                </div>
            </div>
        );
    }
};

export default Main;
