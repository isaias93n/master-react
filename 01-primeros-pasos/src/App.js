import logo from './logo.svg';
import './App.css';
import MiComponente from './MiComponente';
import SegundoComponente from './SegundoComponente';
import {TercerComponente} from './TercerComponente';
import { EventoComponentes } from './EventoComponentes';

function App() {

  const ficha_medica = {
    altura: "187cm",
    grupo: "H+",
    estado: "Bueno",
    alergias: "Ninguna"
  }

  const numero = 1234;

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className='componentes'>
          <hr/>

          <EventoComponentes/>

          <hr/>
          <TercerComponente
            nombre="Isaias"
            apellidos="Navarrete"
            ficha={ficha_medica}
          />
          <hr/>
          <SegundoComponente/>
          <hr/>
          <MiComponente/>
        </div>
        
      </header>

      
    </div>
  );
}

export default App;
