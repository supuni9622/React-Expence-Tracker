import React, {createContext, useReducer} from 'react'
import AppReducer from './AppReducer'

// Initial state
const initialState = {
    transactions: [
        {id : 1, text: 'Flower', amount: -20},
        {id : 2, text: 'Food', amount: -10},
        {id : 3, text: 'Salary', amount: 300},
        {id : 4, text: 'Book', amount: -15}
    ]
}

// Create context

export const GlobalContext = createContext(initialState)

// Provider component

export const GlobalProvider = ({children}) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
    const deleteTransaction = (id) => {
        //dispatch method pass object which includes type and payload
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload:id //any data we want to send
        })
    }

    return(<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction
        }}>
        {children}
    </GlobalContext.Provider>)
}