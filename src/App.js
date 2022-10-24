import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Hello Developer</h1>
      <FontAwesomeIcon icon={faCoffee} />
    </div>
  );
}

export default App;
