import React from 'react'
import { ListGroup, Button, Row, Col}  from 'react-bootstrap'

const Transactions = ({transaction}) => {
    const sign = transaction.amount < 0 ? '-' : '+'
    return (
        <ListGroup.Item>
            <Row className={transaction.amount < 0 ? 'minus' : 'plus' }>
                <Col md={4}>  {transaction.text} </Col>
                <Col md={{ span: 4, offset: 4 }}><span>{sign} ${Math.abs(transaction.amount)}</span> </Col>
            </Row>
            
            <Button variant='danger'>X</Button>
        </ListGroup.Item>
    )
}

export default Transactions
