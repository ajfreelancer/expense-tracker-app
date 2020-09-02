import React from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary.js';
import History from './components/History';
import AddTransaction from './components/AddTransaction';

function App() {
  return (
    <div className="mainContainer">
      <div className="App">
        <Header></Header>
        <Balance />
        <AccountSummary />
        <div className="AppContainer">
          <History />
          <AddTransaction />
        </div>
      </div>
    </div>
    
  );
}

export default App;
