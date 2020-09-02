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
                <input type="text" id="transactionDesc" placeholder="Description"/>
                <label htmlFor="transactionAmnt">
                    Amount
                </label>
                <br/>
                <input type="text" id="transactionDesc" placeholder="Description"/>
                <button>Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction
