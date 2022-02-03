import { CloseButton, Container, DualInputs, Options, Overlay } from "./styles";
import { BsArrowUpCircle, BsArrowDownCircle } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { useState } from "react";

type ModalProps = {
  handleClose: () => void;
}

export function Modal({ handleClose }: ModalProps) {
  const [title, setTitle] = useState('')
  const [payment, setPayment] = useState(0)
  const [weight, setWeight] = useState(0)
  const [type, setType] = useState('deposit')
  const [category, setCategory] = useState('')

  let kgCalc = 50

  return (
    <Overlay>
      <Container totalIsShown={type === 'deposit'}>
        <CloseButton
          onClick={handleClose}
        >
          <IoClose size={20} />
        </CloseButton>
        <h1>Cadastrar transação</h1>
        <form>
          <span>
            <h3>Valor Total: </h3>
            <p>R$ {weight * kgCalc}</p>
          </span>
          <input
            type="text"
            placeholder="Título"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
          <DualInputs>
            {type === 'deposit'
              ? (
                <>
                  <input
                    type="number"
                    placeholder="Pagamento"
                    onChange={(e) => setPayment(Number(e.target.value))}
                    value={payment > 0 ? payment : ''}
                    min={weight * kgCalc}
                  />
                  <input
                    type="number"
                    placeholder="kg"
                    onChange={(e) => setWeight(Number(e.target.value))}
                    value={weight > 0 ? weight : ''}
                  />
                </>
              ) : (
                <>
                  <input
                    type="number"
                    placeholder="Valor"
                    onChange={(e) => setPayment(Number(e.target.value))}
                    value={payment > 0 ? payment : ''}
                  />
                  <input
                    type="text"
                    placeholder="Categoria"
                    onChange={(e) => setCategory(e.target.value)}
                    value={category}
                  />
                </>
              )}
          </DualInputs>

          <Options>
            <input
              type="radio"
              id="deposit"
              value="deposit"
              onChange={(e) => setType(e.target.value)}
              checked={type === 'deposit'}
            />
            <label htmlFor="deposit" className={type === 'deposit' ? 'isChecked' : ''}>
              <BsArrowUpCircle size={20} />
              Entrada
            </label>

            <input
              type="radio"
              id="spent"
              onChange={(e) => setType(e.target.value)}
              value="spent"
              checked={type === 'spent'}
            />
            <label htmlFor="spent" className={type === 'spent' ? 'isChecked' : ''}>
              <BsArrowDownCircle size={20} />
              Saída
            </label>
          </Options>

          <button>Cadastrar</button>
        </form>
      </Container>
    </Overlay>

  )
}