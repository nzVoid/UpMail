import React, {useState} from 'react';
import LeftMenu from "../../UI/LeftMenu/LeftMenu";
import Navbar from "../../UI/Navbar/Navbar";
import MailPost from "../../UI/MailPost/MailPost";
import '../../style/Main.css'

const Main = () => {
    const [mail,setMail] = useState([
        {from: 'vilgelm@gmail.com', body: 'hello', date: '14:50 15.05.2033'},
        {from: 'herdon@gmail.com', body: 'where is my money', date: '13:50 15.05.2033'},
        {from: 'fiebruifbef@gmail.com', body: 'hello dude', date: '17:50 15.05.2033'},
        {from: 'midas@gmail.com', body: 'u a ok', date: '13:50 15.05.2033'},
        {from: 'kelburn@gmail.com', body: 'hola senor', date: '13:50 15.05.2033'},
        {from: 'gabriel@gmail.com', body: 'But Does It Djent', date: '13:50 15.05.2033'},
        {from: 'deamons@gmail.com', body: 'enjoy the silence', date: '13:50 15.05.2033'},
        {from: 'kalimdor@gmail.com', body: 'i saw shrek 10 hour straight', date: '13:50 15.05.2033'},
        {from: 'vorgen@gmail.com', body: 'welcome to hell', date: '13:50 15.05.2033'},
        {from: 'jakub@gmail.com', body: 'i am tired', date: '13:50 15.05.2033'},
    ])
    return (
        <div>
            <LeftMenu></LeftMenu>
            <Navbar></Navbar>
            <div className="postsMail">
                {mail.map(post =>
                    <MailPost post={post}></MailPost>
                )}
            </div>

        </div>
    );
};

export default Main;