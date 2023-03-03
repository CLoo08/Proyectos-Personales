import logo from './logo.svg';
import './App.css';
import { PrimerComponente } from './Componentes/PrimerComponente';
import { SegundoComponente } from './Componentes/SegundoComponente';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Bienvenido Christian Loo. <br></br> Buenos Días
        </p>
        <PrimerComponente/>
        <SegundoComponente/>
      </header>
    </div>
  );
}

export default App;
