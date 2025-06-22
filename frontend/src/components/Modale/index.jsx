import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './style.css';
import {phrases} from '../../store/devexcuses';
import { addSentence } from '../../store/devexcuses';

function Modale({ isOpen, handleClose, children }) {
    const dialogRef = useRef(null);

    function closeModal() {
        dialogRef.current.close();
    }

    useEffect(() => {
        const dialog = dialogRef.current;
        if (isOpen && !dialog.open) {
            dialog.showModal();
        } else {
            dialog.close();
        }
    }, [isOpen]);

    return (
        <dialog className='modale' ref={dialogRef} onClose={handleClose}>
            <button onClick={closeModal} className='btn-close btn'>X</button>
            {children}           
        </dialog>
    )
}

function BoutonModale() {
    const [isOpen, setIsOpen] = useState(false);
    const [newSentence, setNewSentence] = useState('');

    const navigate = useNavigate();

    function closeModal() {
        setIsOpen(false);
    };

    function openModal() {
        setIsOpen(true);
    };

    function handleSubmit(e) {
        e.preventDefault();
        const phrase = {
            http_code: phrases[phrases.length - 1].http_code + 1,
            tag: 'Other',
            message: newSentence
        };
        if(!phrases.map(el => el.message).includes(phrase.message)) {
            addSentence(phrase);
            phrases.push(phrase);
            navigate(`/${phrase.http_code}`);
            closeModal();
        } else {
            alert("La phrase existe déjà!");
        }
        setNewSentence('');
        console.log(phrase);
    }

    return (
        <div>
            <Modale isOpen={isOpen} handleClose={closeModal}>
                <form method='post' onSubmit={handleSubmit} className='form'>
                    <input type='text' value={newSentence} onChange={e => setNewSentence(e.target.value)} className='text' placeholder='Saisissez votre phrase ici'></input>
                    <button type='submit' className='btn-submit btn'> Valider</button>
                </form>
            </Modale>
            <button className='btn-modale btn' onClick={openModal}>Ajouter une nouvelle phrase</button>
        </div>
    )
}

export default BoutonModale;