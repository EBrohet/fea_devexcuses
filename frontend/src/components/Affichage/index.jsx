import './style.css';
import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import Error from '../../pages/Error'
import {phrases} from '../../store/devexcuses';
console.log(phrases);

function RécupérerPhrase() {

    const { code } = useParams();
    const [phrase, setPhrase] = useState("");
    const navigate = useNavigate();
    let randomIndex = '';

    function handleClick() { 
        randomIndex = Math.floor(Math.random() * phrases.length);
        setPhrase(phrases[randomIndex].message);
        navigate(`/${phrases[randomIndex].http_code}`);
    };

    return (
        !code || phrase ? (
        <div>
            <p className='sentence'>{phrase}</p>
            <button onClick={handleClick} className='btn-get'>Afficher une nouvelle phrase</button>
        </div>
        ) : (
            <Error />
        )
    )
}

function Affichage() {
  
    return (
        <div>
            <h1 className='title'>Les excuses de dev</h1>
            <div>{<RécupérerPhrase />}</div>
        </div>
    )
}

export default Affichage