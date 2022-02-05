import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { Transaction } from "../../types"

type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionsContextData = {
  transactions: Transaction[];
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  useEffect(() =>{
    api.get('transactions')
      .then(({data}) => setTransactions(data))
  },[])

  return (
    <TransactionsContext.Provider value={{transactions}}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}