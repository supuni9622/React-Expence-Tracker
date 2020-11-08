import React from 'react'
import { ListGroup, Button}  from 'react-bootstrap'

const TransactionList = () => {
    return (
        <>
            <h3>History</h3>
            <ListGroup variant="flush">
                <ListGroup.Item >Cash <span>-$400</span> <Button variant='danger'>X</Button></ListGroup.Item>
                <ListGroup.Item >Cash <span>-$400</span> <Button variant='danger'>X</Button></ListGroup.Item>
            </ListGroup>
        </>
    )
}

export default TransactionList
