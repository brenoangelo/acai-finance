
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'
import { format } from '../../utils/constants';
import { useTransactions } from '../hooks/useTransactions';

import { Card, Container } from "./styles";

export function OverviewCards() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc, transaction) => {

    if(transaction.type === 'deposit') {
      acc.deposits += transaction.deposit || 0
    }

    acc.spent += transaction.spent || 0
    acc.total = acc.deposits - acc.spent

    return acc
  }, {
    deposits: 0,
    spent: 0,
    total: 0
  })

  return (
    <Container>
      <Card>
        <span>
          <small>Entradas</small>
          <BsArrowUpCircle size={26} />
        </span>

        <h2>{format(summary.deposits)}</h2>
      </Card>

      <Card>
        <span>
          <small>Saídas</small>
          <BsArrowDownCircle size={26} />
        </span>

        <h2>{format(summary.spent)}</h2>
      </Card>

      <Card>
        <span>
          <small>Total</small>
          <MdAttachMoney size={26} />
        </span>

        <h2>{format(summary.total)}</h2>
      </Card>
    </Container>
  )
}