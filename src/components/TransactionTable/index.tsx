import { Container } from "./styles";

import { HiOutlinePencil } from 'react-icons/hi'
import { FiTrash } from 'react-icons/fi'
import { Filter, Transaction } from "../../types";

import { format } from '../../utils/constants'
import { useTransactions } from "../hooks/useTransactions";
import { useMemo } from "react";

type TransactionTableProps = {
  openEditTransaction: (transaction: Transaction) => void;
  filterOpt: Filter;
}

export function TransactionTable({openEditTransaction, filterOpt}: TransactionTableProps) {
  const { transactions, handleRemoveTransaction } = useTransactions()

  function removeTransaction(id: number) {
    handleRemoveTransaction(id)
  }

  function editTransaction(transaction: Transaction) {
    openEditTransaction(transaction)
  }

  const transactionsFiltered = useMemo(() => {
    let transactionsUpdated = Array.from(transactions)

    transactionsUpdated = transactionsUpdated.filter(item => {
        if(filterOpt.category) {
          console.log(filterOpt.category)
          return item.category?.toLowerCase() === filterOpt.category.toLowerCase()
        } else {
          return item
        }
        
      })
      .filter(item => {
        const itemTitleLowerCase = item.title.toLowerCase()
        if(filterOpt.search) {
          return itemTitleLowerCase.includes((filterOpt.search).toLowerCase())
        }
        return item
      })
      .filter(item => {
        const dateFilter = Date.parse(filterOpt.date)
        const dateItem = Date.parse(item.createdAt)

        if(filterOpt.date.trim()) {
          return 
        }
        return item
      })

    return transactionsUpdated
  }, [filterOpt, transactions])

  return (
    <Container>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Entradas</th>
          <th>Saídas</th>
          <th>Categoria</th>
          <th>Extra</th>
          <th>Data</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {transactionsFiltered.length ? (
          transactionsFiltered?.map((transaction: Transaction) => (
            <tr key={transaction.createdAt}>
              <td>{transaction.title}</td>
              <td className="deposit">
                {transaction.deposit ? (
                  `${format(transaction.deposit)}`
                ):(
                  ''
                )}
              </td>
              <td className="spent">
                {transaction.spent ? (
                  `-${format(transaction.spent)}`
                ):(
                  ''
                )}
              </td>
              <td>{transaction.category}</td>
              <td>{transaction.weight ? `${transaction.weight} kg` : ''} </td>
              <td>{format(transaction.createdAt)}</td>
              <td>
                <div className="actionsButtons">
                  <FiTrash size={18} onClick={() => removeTransaction(transaction.id)}/>
                  <HiOutlinePencil size={18} onClick={() => editTransaction(transaction)}/>
                </div>
              </td>
            </tr>
          ))
        ) : <></>
        }
        

      </tbody>
    </Container>
  )
}