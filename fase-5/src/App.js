import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <code> Montaje de mi primera aplicación en React</code> 
        </p>
        <a
          className="Proyecto Diseño de Sitios Web"
          href="tema.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Proyecto
        </a>
      </header>
    </div>
  );
}

export default App;
