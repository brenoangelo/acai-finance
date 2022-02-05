import { Container } from "./styles";

import { HiOutlinePencil } from 'react-icons/hi'
import { FiTrash } from 'react-icons/fi'
import { Transaction } from "../../types";

import { format } from '../../utils/constants'
import { useTransactions } from "../hooks/useTransactions";

export function TransactionTable() {
  const { transactions } = useTransactions()

  return (
    <Container>
      <thead>
        <tr>
          <th>Titulo</th>
          <th>Pagar</th>
          <th>Troco</th>
          <th>Categoria</th>
          <th>Kg</th>
          <th>Data</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        {
          transactions.map((transaction: Transaction) => (
            <tr key={transaction.createdAt}>
              <td>{transaction.title}</td>
              <td className={transaction.type === 'deposit' ? 'deposit' : 'spent'}>
                {transaction.type === 'deposit' ? '' : '-'} 
                {format(transaction.amount)}
              </td>
              <td className="spent">
                {transaction.change ? (
                  `-${format(transaction.change)}`
                ):(
                  ''
                )}
              </td>
              <td>{transaction.type === 'deposit' ? 'Vendas' : transaction.category}</td>
              <td>{transaction.weight ? `${transaction.weight} kg` : ''} </td>
              <td>{format(transaction.createdAt)}</td>
              <td>
                <div className="actionsButtons">
                  <FiTrash size={18} />
                  <HiOutlinePencil size={18} />
                </div>
              </td>
            </tr>
          ))
        }
        

      </tbody>
    </Container>
  )
}