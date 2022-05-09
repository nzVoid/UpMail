import React, {useState} from 'react';
import LeftMenu from "../../UI/LeftMenu/LeftMenu";
import Navbar from "../../UI/Navbar/Navbar";
import MailPost from "../../UI/MailPost/MailPost";
import '../../style/Main.css'
import Modal from "../../UI/Modal/Modal";

class Main extends React.Component{
    componentDidMount = async () =>{
        const res = await fetch('http://localhost:3001/inbox')
        const data = await res.json()
        this.setState({
            data: data,
        })
    }

    state = {
        modalVisible: false,
        modalPost: {}
    }

    /*const [modalVisible, setModalVisible] = useState(false);
    const [modalPost, setModalPost] = useState({});
    const setPostData = (data) => {
        setModalPost(data);
        setModalVisible(true);
    }*/

    render() {
        return (
            <div>
                <LeftMenu></LeftMenu>
                <Navbar></Navbar>
                {this.state.modalVisible ? <Modal onClose={() => this.setState({modalVisible: true})}
                                            post={this.state.data}/> : null}
                <div className="postsMail">
                    {this.state.data.map(post =>
                        <MailPost post={post}></MailPost>
                    )}
                </div>
            </div>

        );
    }
};

export default Main;