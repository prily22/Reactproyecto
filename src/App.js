import './App.css';
import {BrowserRouter as Router, Switch , Route} from 'react-router-dom'
import Navbar from './components/NanBar'
import Inicio from './components/pages/inicio'
import items from './components/pages/items'
import pokemon from './components/pages/Ropa';






function App() {


  return (
    <div className="App">
      <Router>
        <Navbar/>
      </Router>

    </div>
  );
}

export default App;
