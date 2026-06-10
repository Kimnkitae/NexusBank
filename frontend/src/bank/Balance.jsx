import { useContext, useState } from 'react'
import  { BalanceContext } from './BalanceContext'
import './balance.css'

const Balance = () => {
    
    const { balance, setBalance} = useContext(BalanceContext)
    const [payment, setPayment] = useState('')


    const handleClickPlus = () => {
        const numPayment = Number(payment)
        if(payment < 0) {
            return
        }
        setBalance(balance + numPayment)
        setPayment('')
        
    }

    const handleClickMinus = () => {
        const numPayment = Number(payment)
        if(balance <= 0) {
            return
        }
        if(payment > balance) {
            return
        }
        if(numPayment <= balance) {
            setBalance(balance - numPayment)
            setPayment('')
        }
    }

    
    const handleBillChange = (e) => {
        setPayment(e.target.value)
    }

    const fuck = (e) => {
        e.preventDefault()
        
        alert('Идиот, ...')
    }

    return (
        <>
            <div className="balance">
                <div className='bill'>
                    
                    <p className='bill__count'>Balance: {balance} ₽</p>
                </div>
                <div className="bill__input">
                    <input
                    type="number"
                    value={payment}
                    onChange={handleBillChange}
                    placeholder="Enter the payment"
                    />
                </div>
                <div className="btns">
                    <button className='top-up__btn' onClick={() => handleClickPlus()}>Top up</button>
                    <button className='pull-off__btn' onClick={() => handleClickMinus()}>Pull off</button>
                </div>
                <div className="link">
                    <a className='easyMoney' href='easymoney.com' onClick={(e) => {fuck(e)}}>Получить много денег</a>
                </div>
            </div>
            
        </>
    )
    
}


export default Balance