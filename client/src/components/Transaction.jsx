import React, { useContext } from 'react'
import { formatCurrency } from '../utils/format'
import { GlobalContext } from '../context/GlobalState'
export const Transaction = ({ text, amount, id }) => {
    const { deleteTransaction } = useContext(GlobalContext)
    const sign = amount < 0 ? '-' : '+'
    return (
        <li className={sign === '-' ? 'minus' : 'plus'}>
            {text}{' '}
            <span>
                {sign}${formatCurrency(Math.abs(amount))}
            </span>
            <button
                className='delete-btn'
                onClick={() => deleteTransaction(id)}
            >
                x
            </button>
        </li>
    )
}
