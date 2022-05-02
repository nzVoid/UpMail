import React from 'react';
import './Btn.css'
import classNames from "classnames";

const Btn = ({children, onClick, className, disabled, active}) => {
    const classes = classNames(
        'btn',
        className,
        {active},
    );
    return(
        <button
            className={classes}
            disabled={disabled}
            onClick={onClick}
        >
            {children}
        </button>
    )

}


export default Btn;