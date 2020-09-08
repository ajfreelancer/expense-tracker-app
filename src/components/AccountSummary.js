import React, { useContext } from 'react'
import TransactionsContext from '../contexts/TransactionsContext'

function AccountSummary() {

    const [transactions, changeTransactions] = useContext(TransactionsContext);

    let income = 0;
    let expense = 0;

    // eslint-disable-next-line array-callback-return
    transactions.map( trans => {
        if(trans.amount > 0){
            income += Number(trans.amount);
        }else{
            expense += Number(trans.amount);
        }
    })

    return (
        <div className="AccountSummaryContainer">
            <div className="FirstElement">
                <h3>Income</h3>
                <p>${income}</p>
            </div>
            <div className="SecondElement">
                <h3>Expense</h3>
                <p>${-expense}</p>
            </div>
        </div>
    )
}

export default AccountSummary
