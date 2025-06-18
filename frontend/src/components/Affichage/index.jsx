import './style.css';

function RécupérerTableau() {
    return (
        <span>C'est pas ma faute</span>
    )
}

function Affichage() {
    return (
        <div>
            <h1>Les excuses de dev</h1>
            <p className='sentence'>{<RécupérerTableau />}</p>
            <button type="button" className='btn-get'>Afficher une nouvelle phrase</button>
        </div>
    )
}

export default Affichage