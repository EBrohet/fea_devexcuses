import './App.css';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

import {phrases} from './store/devexcuses'
import Error from './pages/Error'
import Affichage from './components/Affichage';
import Modale from './components/Modale';

function App() {

  const { code } = useParams();
  const codes = phrases.map(el => el.http_code).includes(parseInt(code));
  const [hide, setHide] = useState('');

  useEffect(() => {
    if(!code) {
      setHide('hidden');
    }
    setTimeout(() => {
      setHide('');
    }, 2000);
  }, []);

  return (
    (!code || codes) ? (
      <div className="App">
        <Affichage />
        <div className={hide}>
          <Modale />
        </div>
      </div>
    ) : (
      <div className="App">
        <Error />
      </div>
    )
  );
}

export default App;
