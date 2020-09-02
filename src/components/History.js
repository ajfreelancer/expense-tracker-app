import React from 'react';

function History() {
    return (
        <div className="HistoryContainer">
            <h3>
                History
            </h3>
            <hr/>
            <ul className="HistoryList">
                <li className="HistoryListItem red">
                    <span className="TTitle">Salary</span>
                    <span className="removeBtn">
                        <img src={require("../images/remove-button.png")} alt=""/>
                    </span>
                    <span className="TPrice">$200.00</span>
                </li>
                <li className="HistoryListItem green">
                    <span className="TTitle">Payment</span>
                    <span className="removeBtn">
                        <img src={require("../images/remove-button.png")} alt=""/>
                    </span>
                    <span className="TPrice">$200.00</span>
                </li>
            </ul>
        </div>
    )
}

export default History
