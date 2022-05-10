import React from 'react';
import LeftMenu from "../../UI/LeftMenu/LeftMenu";
import Navbar from "../../UI/Navbar/Navbar";
import MailPost from "../../UI/MailPost/MailPost";
import '../../style/Main.css'
import Modal from "../../UI/Modal/Modal";

class Main extends React.Component {
    componentDidMount = async () => {
        const res = await fetch('http://localhost:3001//mailbox')
        const data = await res.json()
        this.setState({
            data: data,
        })
    }
    setPostData = (data) => {
        this.setState(
            {
                modalMailVisible: true,
                modalPost: data
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
                    post={this.state.data} /> : null}
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

/*const [modalVisible, setModalVisible] = useState(false);
  const [modalPost, setModalPost] = useState({});
  const setPostData = (data) => {
      setModalPost(data);
      setModalVisible(true);
  }*/