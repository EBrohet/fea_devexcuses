import './style.css';
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { SpinnerCircularFixed } from 'spinners-react';

import {phrases} from '../../store/devexcuses';

function BoutonAffichage({ phrases, nouvPhrase }) {

    const { code } = useParams();
    const [phrasePrec, setPhrasePrec] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [hide, setHide] = useState('');

    useEffect(() => {
        if(!code) {
            setHide('hidden');
        }
        setTimeout(() => {
            setHide('');
        }, 2000);
    }, []);

    function handleClick() { 
        let randomIndex = Math.floor(Math.random() * phrases.length);
        const phraseTrouvee = phrases[randomIndex];
        while (phrasePrec === phraseTrouvee.message && phrases.length > 1) {
            randomIndex = Math.floor(Math.random() * phrases.length);
        }
        setIsLoading(true);
        const sentence = document.querySelector(".sentence");
        const delay = Math.floor(Math.random() * (5000 - 1000)) + 1000;
        sentence.style.visibility = "hidden";
        setTimeout(() => {
            setIsLoading(false);
            sentence.style.visibility = "visible";
        }, delay);
        setPhrasePrec(phraseTrouvee.message);
        nouvPhrase(phraseTrouvee);
    };

    return (
        <div>
            <SpinnerCircularFixed enabled={isLoading} className='spinner' size='70'/>
            <button onClick={handleClick} className={`btn-get btn ${hide}`}>Afficher une excuse</button>
        </div>
    )
}

function Affichage() {
    const [phrase, setPhrase] = useState("");
    const navigate = useNavigate();
    const { code } = useParams();
    const [classAnim, setClassAnim] = useState('');

    useEffect(() => {
        if(code) {
            const phraseCorr = phrases.find(el => el.http_code === parseInt(code));
            if(phraseCorr) {
                setPhrase(phraseCorr.message);
            }
        } else {
            setClassAnim("animation");
        }
    }, [code]);

    const nouvPhrase = (phraseTrouvee) => {
        setPhrase(phraseTrouvee.message);
        navigate(`/${phraseTrouvee.http_code}`);
    }

    return (
        <div>
            <h1 className={`title ${classAnim}`}>Les excuses de dev</h1>
            <p className='sentence'>{phrase}</p>
            <BoutonAffichage phrases={phrases} nouvPhrase={nouvPhrase} />
        </div>
    )
}

export default Affichage