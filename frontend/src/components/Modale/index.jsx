import { useState, useRef, useEffect } from 'react';

import './style.css';

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

    function closeModal() {
        setIsOpen(false);
    };

    function openModal() {
        setIsOpen(true);
    };

    function handleSubmit(e) {
        e.preventDefault();

        closeModal();
    }
    console.log(newSentence);

    return (
        <div>
            <Modale isOpen={isOpen} handleClose={closeModal}>
                <form method='post' onSubmit={handleSubmit} className='form'>
                    <input type='text' value={newSentence} onChange={e => setNewSentence(e.target.value)} className='text' placeholder='Saisissez votre phrase ici'></input>
                    {/* <select name="tag" id="tag">
                        <option value="Inexcusable"></option>
                        <option value="Novelty Implementations"></option>
                        <option value="Edge Cases"></option>
                        <option value="Fucking"></option>
                        <option value="Syntax Errors"></option>
                        <option value="Substance"></option>
                        <option value="Predictable Problems"></option>
                        <option value="Somebody Else's Problem"></option>
                        <option value="Internet crashed"></option>
                    </select> */}
                    <button type='submit' className='btn-submit btn'> Valider</button>
                </form>
            </Modale>
            <button className='btn-modale btn' onClick={openModal}>Ajouter une nouvelle phrase</button>
        </div>
    )
}

export default BoutonModale;