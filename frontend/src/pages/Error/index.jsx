import { Link } from 'react-router-dom';
import './style.css';

function Error() {
    return (
        <div className="error">
            <h2 className='title-error'>404</h2>
            <p>Oups! La page que vous demandez est introuvable.</p>
            <Link to="/" className='link'>Retour à la page d'accueil</Link>
        </div>
    )
}

export default Error;