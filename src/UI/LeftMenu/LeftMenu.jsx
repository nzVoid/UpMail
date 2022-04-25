import React from 'react';
import ReactDOM from "react-dom/client";
import '../../style/LeftMenu.css'
import Main from "../../components/Main/Main";

function Enter(){
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
        <Main></Main>
    )
}

const LeftMenu = () => {
    return (
        <div className="widget">
            <ul className="widget-list">
                <li onClick={Enter}><a >Входящие</a></li>
                <li><a href="">Отправленные</a></li>

            </ul>
        </div>
    );
};

export default LeftMenu;