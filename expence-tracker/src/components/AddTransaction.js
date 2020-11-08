import React, {useState, useContext} from 'react'
import {Form, Button} from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState'

const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount, setAmount] = useState(0)

    const {addTransaction} = useContext(GlobalContext)

    const onSubmit = (e) => {
        e.preventDefault()

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount : Number(amount)
        }

        addTransaction(newTransaction)

    }

    return (
        <>
            <h3 className='my-3 add-header'> Add new transaction </h3>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="transaction-text">
                    <Form.Label className='add-body'>Text</Form.Label>
                    <Form.Control type="text" id="text-t" placeholder="Enter text.." value={text} onChange={(e)=> setText(e.target.value)}/>
                </Form.Group>
                <Form.Group controlId="transaction-amount">
                    <Form.Label className='add-body'>
                        Amount <br/>
                        ( negative - expense, positive - income )
                    </Form.Label>
                    <Form.Control type="number" id="amount-t" placeholder="Enter amount" value={amount} onChange={(e)=> setAmount(e.target.value)} />
                </Form.Group>
                <Button className='mb-5' variant='outline-dark' type="submit" block> <span style={{color:'white'}}> Add Transaction </span> </Button>
            </Form>
        </>
    )
}

export default AddTransaction
