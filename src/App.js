import logo from './logologo.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="img-fluid" alt="logo" />
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <small>Coded by Melina</small>
      </footer>
    </div>
  );
}

