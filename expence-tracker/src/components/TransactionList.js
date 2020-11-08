import React, {useContext} from 'react'
import { ListGroup}  from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState'

import Transactions from './Transactions'

const TransactionList = () => {

    //const transactionContext = useContext(GlobalContext)
    // console.log(transactionContext)

    // Use curly braces to destructuring. Now it's an array
    const {transactions} = useContext(GlobalContext)
    
    return (
        <>
            <h3 className='my-3'>History</h3>
            <ListGroup variant="flush">
                {
                    transactions.map(transaction => ( <Transactions key={transaction.id} transaction={transaction}/> ))
                }
            </ListGroup>
        </>
    )
}

export default TransactionList
