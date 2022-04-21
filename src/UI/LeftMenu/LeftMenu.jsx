import React from 'react';
import '../../style/LeftMenu.css'
const LeftMenu = () => {
    return (
        <div className="widget">
            <ul className="widget-list">
                <li><a href="">Входящие</a></li>
                <li><a href="">Отправленные</a></li>

            </ul>
        </div>
    );
};

export default LeftMenu;