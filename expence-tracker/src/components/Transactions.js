import React, {useContext} from 'react'
import { ListGroup, Button, Row, Col}  from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState'

const Transactions = ({transaction}) => {

    const {deleteTransaction} = useContext(GlobalContext)

    const sign = transaction.amount < 0 ? '-' : '+'

    return (
        <ListGroup.Item>
            <Row className={transaction.amount < 0 ? 'minus' : 'plus' }>
                <Col md={3}>  {transaction.text} </Col>
                <Col md={{ span: 4, offset: 3 }}><span>{sign} ${Math.abs(transaction.amount)}</span> </Col>
                <Col md={1}> <Button variant='danger' onClick={()=>deleteTransaction(transaction.id)}>X</Button></Col>
            </Row>
        </ListGroup.Item>
    )
}

export default Transactions
