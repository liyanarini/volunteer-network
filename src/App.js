import './App.css';
import Home from './Components/Home/Home'
import Register from './Components/Register/Register'
import Login from './Components/Login/Login'
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { createContext, useState } from 'react';
import UserTasks from './Components/UserTasks/UserTasks';
import Admin from './Components/Admin/Admin';


export const UserContext = createContext();

function App() {

  const [loggedInUser , setLoggedInUser] = useState({});


  return (
    <div className="App">
      <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/admin">
              <Admin></Admin>
            </Route>
            <PrivateRoute path="/register/:key">
              <Register></Register>
            </PrivateRoute>
            <PrivateRoute path="/register"> 
              <Register></Register>
            </PrivateRoute>
            <PrivateRoute path="/registeredTasks">
              <UserTasks></UserTasks>
            </PrivateRoute>
          </Switch>
        </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;
