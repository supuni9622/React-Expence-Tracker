import React, {useContext} from 'react'
import { ListGroup, Button}  from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState'

const TransactionList = () => {

    //const transactionContext = useContext(GlobalContext)
    // console.log(transactionContext)

    // Use curly braces to destructuring. Now it's an array
    const {transactions} = useContext(GlobalContext)
    
    return (
        <>
            <h3>History</h3>
            <ListGroup variant="flush">
                {
                    transactions.map(transaction => ( <ListGroup.Item >
                        {transaction.text} <span>{transaction.amount}</span> 
                        <Button variant='danger'>X</Button>
                    </ListGroup.Item>))
                }
            </ListGroup>
        </>
    )
}

export default TransactionList
