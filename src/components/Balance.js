import React, { useContext } from 'react';
import TransactionsContext from '../contexts/TransactionsContext';

function Balance() {

    const transactionsContext = useContext(TransactionsContext);
    const transactions = transactionsContext[0];

    let balance = 0;

    // eslint-disable-next-line array-callback-return
    transactions.map( trans => {
        balance += Number(trans.amount);
    })

    return (
        <div className="BalanceComponent">
            <h3>Balance</h3>
            <h1>${ balance }</h1>
        </div>
    )
}

export default Balance
