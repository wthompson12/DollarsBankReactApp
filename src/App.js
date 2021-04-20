import './App.css';
import { Redirect } from "react-router";


import React, {useEffect, useState} from 'react';
import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/Login';
import CreatePin from './components/CreatePin';
import Atm from './components/Atm';
import AtmChoices from './components/AtmChoices';
import AccountBalance from './components/AccountBalance'
import Withdraw from './components/Withdraw';
import Deposit from './components/Deposit';
import Logout from './components/LogOut';

function DollarsBankApp() {
  const [users, setUsers] = useState(new Map());
  const [login, setLogin] = useState([null]);

  users.set({pinNumber: 1234, name:"Son Goku", balance:100.00,});
  useEffect(()=>{console.log(users)},[users]);
  return (
    <div className="App">
      <Router>
        <main>
          <Switch>
            <Redirect exact from="/" to="atm" />
            <Route path="/Login"><Login
              login={login} users={users} setLogin={setLogin} setUsers={setUsers}/></Route>

            <Route path="/CreatePin"><CreatePin
              login={login} users={users} setUsers={setUsers}/></Route>

            <Route path="/atm"><Atm/></Route>

            <Route path="/deposit"><Deposit
              login={login} setLogin={setLogin} users={users} setUsers={setUsers}/></Route>

            <Route path="/withdraw"><Withdraw
              login={login} setLogin={setLogin} users={users} setUsers={setUsers}/></Route>

            <Route path="/AccountBalance"><AccountBalance
              login={login}/></Route>

            <Route path="/logOut"><Logout
              login={login} setLogin={setLogin}/></Route>

            <Route path="/atmChoices/"><AtmChoices
              login={login}/></Route>

            <Route path="/logout"><Logout
              login={login} setLogin={setLogin}/></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default DollarsBankApp;