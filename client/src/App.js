import React, {Component} from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css';
import WalletList from './components/wallet-list.component';
import EditWallet from './components/wallet-edit.component';
import CreateWallet from './components/wallet-create.component';


class App extends Component{
  render(){
    return(
      <div className="container">
        <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="https://codingthesmartway.com" target="_blank">
              <img src={logo} width="30" height="30" alt="CodingTheSmartWay.com" />
            </a>
            <Link to="/" className="navbar-brand">Wallet App</Link>
            <div className="collpase nav-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="navbar-item">
                  <Link to="/" className="nav-link">Wallet</Link>
                </li>
                <li className="navbar-item">
                  <Link to="/create" className="nav-link">Create Wallet</Link>
                </li>
              </ul>
            </div>
        </nav>
        
          <Route path="/" exact component={WalletList} />
          <Route path="/edit/:id" component={EditWallet} />
          <Route path="/create" component={CreateWallet} />
        </Router>
      </div>
      
    );
  }
}

export default App;
