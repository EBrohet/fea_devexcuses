import './App.css';
import { useParams } from 'react-router-dom';

import {phrases} from './store/devexcuses'
import Error from './pages/Error'
import Affichage from './components/Affichage';
import Modale from './components/Modale';

function App() {

const { code } = useParams();
const codes = phrases.map(el => el.http_code).includes(parseInt(code));

  return (
    (!code || codes) ? (
      <div className="App">
        <Affichage />
        <Modale />
      </div>
    ) : (
      <div className="App">
        <Error />
      </div>
    )
  );
}

export default App;
