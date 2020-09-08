import { createContext } from 'react'

let initialState = []

const TransactionsContext = createContext(initialState)

export default TransactionsContext;