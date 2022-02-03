import { Container } from "./styles";

import { HiOutlinePencil } from 'react-icons/hi'
import { FiTrash } from 'react-icons/fi'

export function TransactionTable() {
  return (
    <Container>
      <thead>
        <tr>
          <th>Cliente</th>
          <th>Preço</th>
          <th>Troco</th>
          <th>Kg</th>
          <th>Data</th>
          <th></th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>Breno</td>
          <td className="deposit">R$ 23</td>
          <td className="spent">- R$ 0,50</td>
          <td>2 kg</td>
          <td>22/01/2022</td>
          <td>
            <div className="actionsButtons">
              <FiTrash size={18} />
              <HiOutlinePencil size={18} />
            </div>
          </td>
        </tr>

        <tr>
          <td>Ana Júlia</td>
          <td className="deposit">R$ 18</td>
          <td className="spent">- R$ 5</td>
          <td>2 kg</td>
          <td>22/01/2022</td>
          <td>
            <div className="actionsButtons">
              <FiTrash size={18} />
              <HiOutlinePencil size={18} />
            </div>
          </td>
        </tr>

        <tr>
          <td>Jacob</td>
          <td className="deposit">R$ 23</td>
          <td className="spent">- R$ 0,50</td>
          <td>2 kg</td>
          <td>22/01/2022</td>
          <td>
            <div className="actionsButtons">
              <FiTrash size={18} />
              <HiOutlinePencil size={18} />
            </div>
          </td>
        </tr>
      </tbody>
    </Container>
  )
}