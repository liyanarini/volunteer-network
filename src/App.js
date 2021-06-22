import './App.css';
import Home from './Components/Home/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Home></Home>
      </Router>
      
    </div>
  );
}

export default App;
