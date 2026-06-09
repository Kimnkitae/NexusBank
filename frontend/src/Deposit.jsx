import { useContext, useState, useEffect } from 'react'

import './deposit.css'
import Balance from './Balance.jsx'
import { BalanceContext } from './BalanceContext.jsx'

const Deposit = () => {
    const [deposit, setDeposit] = useState(0)
    const { balance, setBalance } = useContext(BalanceContext)
    const [amount, setAmount] = useState('')
    const [yearsSecond, setYearssecond] = useState('')

    const increaseDeposit = () => {
        let numYearsSecond = Number(yearsSecond)
       setYearssecond('')

        const interval = setInterval(() => {
            numYearsSecond--
            setDeposit(prev => prev + (prev / 100) * 10)
            if(numYearsSecond === 0) {
                clearInterval(interval)
            }
        }, 10000)
    }


    const handleClickTopUp = () => {
       const numAmount = Number(amount)
        if(balance >= numAmount) {
            setDeposit(deposit + numAmount)
            setBalance(balance - numAmount)
            setAmount('')
            increaseDeposit()
        }
    }
    
    const handleClickPullOff = () => {
       const numAmount = Number(amount)
        if(balance >= numAmount) {
            setDeposit(deposit - numAmount)
            setBalance(balance + numAmount)
            setAmount('')
           
        }
    }

    const handleDepositChange = (e) => {
        setAmount(e.target.value)
    }

    const handleYearsChange = (e) => {
        setYearssecond(e.target.value)

    }

    return (
        <>
            <div className="deposit"> 
                <div className="depositBalance">
                    <p className='deposit__count'>Deposit: {deposit}  ₽</p>
                </div>
                <div className="deposit__input">
                    <input
                    type="number"
                    value={amount}
                    onChange={handleDepositChange}
                    placeholder="Enter the deposit"
                    />
                </div>

                <div className="deposit__seconds">
                    <input
                    type="number"
                    value={yearsSecond}
                    onChange={handleYearsChange}
                    placeholder="Enter the time()"
                    />
                </div>
                <div className="btns">
                    <button className='top-up__btn' onClick={() => handleClickTopUp()}>Top up</button>
                    <button className='pull-off__btn' onClick={() => handleClickPullOff()}>Pull off</button>
                    <p>Deposit for 10% per 10 seconds</p>
                </div>
            </div>
        </>
    )
}

export default Deposit


/* setInterval, useEffect, async, await, Promise */