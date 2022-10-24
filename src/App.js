import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="App">
      <h1>Hello Developer</h1>
      <FontAwesomeIcon icon={faCoffee} />
      <Toaster></Toaster>
    </div>
  );
}

export default App;
