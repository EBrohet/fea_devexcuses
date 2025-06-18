import './style.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const phrases = [
    {
        "http_code": 701,
        "tag": "inexcusable",
        "message": "Meh"
    },
    {
        "http_code": 702,
        "tag": "inexcusable",
        "message": "Emacs"
    },
    {
        "http_code": 703,
        "tag": "inexcusable",
        "message": "Explosion"
    }
]

function RécupérerPhrase() {

    const [phrase, setPhrase] = useState("");
    const navigate = useNavigate();
    let randomIndex = '';

    function handleClick() {    
        randomIndex = Math.floor(Math.random() * phrases.length);
        setPhrase(phrases[randomIndex].message);
        navigate(`/${phrases[randomIndex].http_code}`);
    };

    return (
        <div>
            <p className='sentence'>{phrase}</p>
            <button onClick={handleClick} className='btn-get'>Afficher une nouvelle phrase</button>
        </div>
    )
}

function Affichage() {
  
    return (
        <div>
            <h1>Les excuses de dev</h1>
            <div>{<RécupérerPhrase />}</div>
        </div>
    )
}

export default Affichage