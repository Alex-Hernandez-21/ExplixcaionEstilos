import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <span className="fondoNegro">hola mundo</span>
      <div className="alert alert-danger" role="alert">
        A simple danger alert—check it out!
      </div>
      <button type="button" className="btn btn-primary">Primary</button>
      <button type="button" className="btn btn-success">Success</button>
    </div>
  );
}

export default App;
