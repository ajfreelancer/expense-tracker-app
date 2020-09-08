import React, {useState} from 'react';
import './App.css';
import Header from './components/Header'
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary.js';
import History from './components/History';
import AddTransaction from './components/AddTransaction';
import TransactionContext from './contexts/TransactionsContext'

function App() {

  const value = useState([]);

  return (
    <div className="mainContainer">
      <TransactionContext.Provider value={value}>
        <div className="App">
          <Header></Header>
          <Balance />
          <AccountSummary />
          <div className="AppContainer">
            <History />
            <AddTransaction />
          </div>
        </div>
      </TransactionContext.Provider>
    </div>
    
  );
}

export default App;
