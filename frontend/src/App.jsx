import { createContext, useState } from 'react'

import Balance from './Balance.jsx'
import { BalanceContext } from './BalanceContext.jsx'
import Deposit from './Deposit.jsx'

import './app.css'

function App() {
  const [balance, setBalance] = useState(0)

  return (
    <>
      <div className="container">
        <BalanceContext.Provider value={{ balance, setBalance}}>

          <Balance />
          <Deposit />
        </BalanceContext.Provider>
      </div>
    </>
  )
}

export default App
