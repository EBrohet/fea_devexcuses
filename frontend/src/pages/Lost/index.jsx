import { useEffect } from 'react';
import './style.css';


function Lost() {
    useEffect(() => {
        const delay = setTimeout(() => {
            window.location.href = '/';
        }, 5000);
        return () => clearTimeout(delay);
    }, []);

    return (
        <div className="lost">
            <p className="lost-p">I'm lost</p>
            <img className="gif" src="https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcm44dm5rcGVqcmZkNGlzazkzcnNiemg2NHhvanVpdzl0OTRieXZxMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/8GTKaetBL5IVBMr18A/giphy.gif" alt="gif lost" />
        </div>
    )
}

export default Lost;