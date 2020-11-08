import React from 'react'
import {Card} from 'react-bootstrap'

const IncomeExpenses = () => {
    return (
        <div className='d-flex justify-content-center'>
            <Card className='px-5 py-2'>
                <h4> Income </h4>
                <p id="money-plus" className='money-plus'> + $0.00 </p>
            </Card>
            <Card className='px-5 py-2'>
                <h4> Expense </h4>
                <p id="money-minus" className='money-minus'> - $0.00 </p>
            </Card>   
        </div>
    )
}

export default IncomeExpenses
