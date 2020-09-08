import React, { useContext } from 'react';
import TransactionsContext from '../contexts/TransactionsContext';

function History() {

    const [transactions, changeTransactions] = useContext(TransactionsContext)

    let deleteTransaction = (index) => {
        changeTransactions( transactions.filter( (v, i, a) => i!==index) );
    }

    return (
        <div className="HistoryContainer">
            <h3>
                History
            </h3>
            <hr/>
            
            <ul className="HistoryList">
                {
                    transactions.map( (trans, i) => (
                            <li 
                                className={`HistoryListItem ${trans.amount<0? 'red': 'green'}`}  
                                key={i}
                            >
                                <span className="TTitle">{trans.desc}</span>
                                <span
                                    className="removeBtn"
                                    onClick={ () => deleteTransaction(i) }>
                                    <img src={require("../images/remove-button.png")} alt=""/>
                                </span>
                                <span className="TPrice">${trans.amount.replace("-", "")}</span>
                            </li>
                        )
                    )
                }
            </ul>
        </div>
    )
}

export default History
