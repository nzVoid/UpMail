import React from 'react';
import { useNavigate } from 'react-router-dom';


function Baton() {
    let navigate = useNavigate();

    function handleClick() {
        navigate('/');
    };
    return <button onClick={handleClick}>Submit</button>;
}

export default Baton;