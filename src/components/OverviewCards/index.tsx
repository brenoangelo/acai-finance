
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { MdAttachMoney } from 'react-icons/md'

import { Card, Container } from "./styles";

export function OverviewCards() {
  return (
    <Container>
      <Card>
        <span>
          <small>Entradas</small>
          <BsArrowUpCircle size={26} />
        </span>

        <h2>R$ 17.400,00</h2>
      </Card>

      <Card>
        <span>
          <small>Saídas</small>
          <BsArrowDownCircle size={26} />
        </span>

        <h2>R$ 17.400,00</h2>
      </Card>

      <Card>
        <span>
          <small>Total</small>
          <MdAttachMoney size={26} />
        </span>

        <h2>R$ 17.400,00</h2>
      </Card>
    </Container>
  )
}