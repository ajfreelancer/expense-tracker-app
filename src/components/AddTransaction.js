import React, {useContext, useState} from 'react'
import TransactionsContext from '../contexts/TransactionsContext'

function AddTransaction() {

    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")

    let [transactions, changeTransactions] = useContext(TransactionsContext);
    

    let updateTransactions = () => {
        if(desc !== "" && amount !== ""){
            changeTransactions([
                ...transactions,
                {
                    "desc": desc,
                    "amount": amount
                }
            ])  
            document.getElementById("addTransactionForm").reset();
            setDesc("")
            setAmount("")
        }
        
    }

    return (
        <div className="AddTransactionContainer">
            <h3>
                Add Transaction
            </h3>
            <hr/>
            <form id="addTransactionForm">
                <label htmlFor="transactionDesc">
                    Description
                </label>
                <br/>
                <input 
                    type="text" 
                    id="transactionDesc" 
                    placeholder="Enter your description" 
                    value = {desc.value}
                    onChange = { (event) => setDesc( event.target.value ) }
                />
                <label htmlFor="transactionAmnt">
                    Amount
                </label>
                <br/>
                <input 
                    type="text" 
                    id="transactionAmnt" 
                    placeholder="Enter transaction amount"
                    value = {amount.value}
                    onChange = { (event) => setAmount( event.target.value ) }
                    onKeyDown = { (e) => { e.key === 'Enter'? updateTransactions(): console.log() } }
                />
                <div
                    className = "btn"
                    onClick = { () => updateTransactions() }
                    type = "button"
                >
                    Add Transaction
                </div>
            </form>
        </div>
    )
}

export default AddTransaction
