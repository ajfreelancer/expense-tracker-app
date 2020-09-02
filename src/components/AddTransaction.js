import React from 'react'

function AddTransaction() {
    return (
        <div className="AddTransactionContainer">
            <h3>
                Add Transaction
            </h3>
            <hr/>
            <form>
                <label htmlFor="transactionDesc">
                    Description
                </label>
                <br/>
                <input 
                    type="text" 
                    id="transactionDesc" 
                    placeholder="Enter your description" 
                />
                <label htmlFor="transactionAmnt">
                    Amount
                </label>
                <br/>
                <input 
                    type="text" 
                    id="transactionAmnt" 
                    placeholder="Enter transaction amount" 
                />
                <button>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
