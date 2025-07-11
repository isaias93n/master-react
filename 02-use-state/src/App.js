import logo from './logo.svg';
import './App.css';
import { MiPrimerEstado } from './components/MiPrimerEstado';
import { EjercicioComponent } from './components/EjercicioComponent';

function App() {

  const currentTime = new Date();
  const currentYear = currentTime.getFullYear();
  
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <h1>Ejercicio</h1>

        <EjercicioComponent 
            currentYear = {currentYear}
        />

        <h1>El estado en React - Hook useState</h1>

        <MiPrimerEstado />

      </header>
    </div>
  );
}

export default App;
