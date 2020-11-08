import React, {useContext} from 'react'
import {Card} from 'react-bootstrap'
import {GlobalContext} from '../context/GlobalState'

const IncomeExpenses = () => {

    const {transactions} = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount);
    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item),0)
        .toFixed(2)
    
    const expense = (amounts.filter(item => item < 0).reduce((acc, item)=> (acc += item),0)* -1)
                    .toFixed(2)
    
    return (
        <div className='d-flex justify-content-center'>
            <Card className='px-5 py-2'>
                <h4> Income </h4>
                <p id="money-plus" className='money-plus'> + ${income} </p>
            </Card>
            <Card className='px-5 py-2'>
                <h4> Expense </h4>
                <p id="money-minus" className='money-minus'> - ${expense} </p>
            </Card>   
        </div>
    )
}

export default IncomeExpenses
