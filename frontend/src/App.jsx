import { createContext, useState } from 'react'

import Balance from './bank/Balance.jsx'
import { BalanceContext } from './bank/BalanceContext.jsx'
import Deposit from './bank/Deposit.jsx'

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
