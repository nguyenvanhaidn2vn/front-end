import React from 'react';
import './App.css';
import {
  Redirect,
  Switch,
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Login from './components/Login/Login'
import Dashboard from './components/Dashboard/Dashboard';
import ManageEMenu from './components/ManageEMenu/ManageEMenu';
import Addnewdishes from './components/Addnewdishes/Addnewdishes';
import EmployeeManager from './components/EmployeeManager/EmployeeManager';
import Adneewstaff from './components/Addnewstaff/Addnewstaff';
const App = () => {
  return (
    <div className='container'>
      <Router>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/cart' component={Cart} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Dashboard' component={Dashboard} />
          <Route exact path='/Manage-e-menu' component={ManageEMenu} />
          <Route exact path='/Add-new-Dishes'component={Addnewdishes} />
          <Route exact path='/Employee_Manager'component={EmployeeManager} />
          <Route exact path='/Addnewstaff' component={Adneewstaff}/>
          <Redirect to='/' />
        </Switch>
      </Router>
    </div>
  );
};
// cái này t phân role bên node ròi 
export default App;
