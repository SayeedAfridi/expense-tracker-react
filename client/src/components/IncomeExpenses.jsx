import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { formatCurrency } from '../utils/format'
const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext)

    const amounts = transactions.map(transaction => transaction.amount)

    const income = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2)

    const expense = (
        amounts
            .filter(item => item < 0)
            .reduce((acc, item) => (acc += item), 0) * -1
    ).toFixed(2)
    return (
        <div className='inc-exp-container'>
            <div>
                <h4>Income</h4>
                <p className='money plus'>+${formatCurrency(income)}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className='money minus'>
                    -${formatCurrency(Math.abs(expense))}
                </p>
            </div>
        </div>
    )
}

export default IncomeExpenses