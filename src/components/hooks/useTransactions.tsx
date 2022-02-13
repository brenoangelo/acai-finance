import { createContext, ReactNode, useContext, useEffect, useState } from "react"
import { api } from "../../services/api"
import { Transaction } from "../../types"

type TransactionsProviderProps = {
  children: ReactNode;
}

type TransactionsContextData = {
  transactions: Transaction[];
  handleCreateTransaction: (transaction: Transaction) => void;
  handleRemoveTransaction: (id: number) => void;
  handleEditTransaction: (transaction: Transaction) => void;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData)

export function TransactionsProvider({children}: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])
  
  useEffect(() => {
    updateTable()
    console.log('teste')
  },[])

  async function updateTable() {
    const response = await api.get('transactions')

    setTransactions(response.data.transactions)
  }

  async function handleCreateTransaction(transaction: Transaction) {
    if(!transaction) {
      return;
    }

    try {
      await api.post('transactions', transaction)

      setTransactions([...transactions, transaction])
    }catch(err){
      console.log('error: ', err)
    }

  }

  async function handleEditTransaction(transaction: Transaction) {
    const transactionIndex = transactions.findIndex(item => item.id === transaction.id)
    let transactionsUpdated = Array.from(transactions)

    if(transactionIndex < 0) {
      return;
    }

    try {
      await api.put(`transactions/${transaction.id}`, transaction)
      transactionsUpdated.splice(transactionIndex, 1, transaction)

      setTransactions([...transactionsUpdated])
    }catch(err){
      console.log('error: ', err)
    }

  }

  async function handleRemoveTransaction(id: Number){
    const transactionExists = transactions.find(transaction => transaction.id === id)

    if(!transactionExists) {
      return;
    }
    
    setTransactions(() => transactions.filter(transaction => transaction.id !== id))

    try {
      await api.post('transactions', transactions)
    }catch(err) {
      console.log('error:', err)
    }
    
  }

  return (
    <TransactionsContext.Provider 
      value={{transactions, handleCreateTransaction, handleRemoveTransaction, handleEditTransaction}}
    >
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}