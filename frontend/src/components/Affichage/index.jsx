import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {phrases} from '../../store/devexcuses';

function BoutonAffichage({ phrases, nouvPhrase }) {

    const [phrasePrec, setPhrasePrec] = useState("");

    function handleClick() { 
        let randomIndex = Math.floor(Math.random() * phrases.length);
        const phraseTrouvee = phrases[randomIndex];
        while (phrasePrec === phraseTrouvee.message && phrases.length > 1) {
            randomIndex = Math.floor(Math.random() * phrases.length);
        }
        setPhrasePrec(phraseTrouvee.message);
        nouvPhrase(phraseTrouvee);
    };

    return (
        <div>
            <button onClick={handleClick} className='btn-get btn'>Afficher une excuse</button>
        </div>
    )
}

function Affichage() {
    const [phrase, setPhrase] = useState("");
    const navigate = useNavigate();
    const { code } = useParams();

    useEffect(() => {
        if(code) {
            const phraseCorr = phrases.find(el => el.http_code === parseInt(code));
            if(phraseCorr) {
                setPhrase(phraseCorr.message);
            }
        }
    }, [code]);

    const nouvPhrase = (phraseTrouvee) => {
        setPhrase(phraseTrouvee.message);
        navigate(`/${phraseTrouvee.http_code}`);
    }

    return (
        <div>
            <h1 className='title'>Les excuses de dev</h1>
            <p className='sentence'>{phrase}</p>
            <BoutonAffichage phrases={phrases} nouvPhrase={nouvPhrase} />
        </div>
    )
}

export default Affichage