import React from 'react'
import { ListGroup, Button}  from 'react-bootstrap'

const Transactions = ({transaction}) => {
    return (
        <ListGroup.Item >
            {transaction.text} <span>{transaction.amount}</span> 
            <Button variant='danger'>X</Button>
        </ListGroup.Item>
    )
}

export default Transactions
