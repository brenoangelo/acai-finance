import { CloseButton, Container, DualInputs, Options, Overlay } from "./styles";
import { BsArrowUpCircle, BsArrowDownCircle, BsEmojiAngry } from 'react-icons/bs'
import { IoClose } from 'react-icons/io5'
import { useEffect, useState } from "react";
import { Transaction } from "../../types";
import { useTransactions } from "../hooks/useTransactions";

type ModalProps = {
  handleClose: () => void;
  transaction: Transaction;
}

let initialValues = {
  id: 0,
  title: '',
  deposit: 0,
  spent: 0,
  weight: 0,
  type: 'deposit',
  category: '',
  createdAt: ''
}

export function Modal({ handleClose, transaction }: ModalProps) {
  const [transactionInfo, setTransactionInfo] = useState<Transaction>(initialValues)
  const { handleCreateTransaction, handleEditTransaction } = useTransactions()

  let kgCalc = 50

  useEffect(() => {
    if(!transaction.id) {
      setTransactionInfo(initialValues)
      return;
    }

    setTransactionInfo(transaction)
  },[])

  function calcTheChange(payment: number, weight: number, kgCalc: number) {
    const total = payment - (weight * kgCalc)

    return total
  }

  function handleSubmit() {
    const { title, weight, type, category, deposit, spent, id } = transactionInfo

    if(title.trim() === '') {
      return;
    }

    if(weight === 0 && type === 'deposit') {
      return;
    }

    if(type !== 'deposit' && category?.trim() === '') {
      return;
    }

    if(id) {
      handleEditTransaction(transactionInfo)
      handleClose()
      return;
    }

    const transaction = {
      id: Date.now(),
      title: title,
      deposit: deposit,
      spent: spent || calcTheChange((deposit || 0), (weight || 0), kgCalc),
      weight: weight,
      type: type,
      category: category || 'Vendas',
      createdAt: (new Date()).toDateString()
    }
    
    handleCreateTransaction(transaction)
    handleClose()
  }

  return (
    <Overlay>
      <Container totalIsShown={transactionInfo.type === 'deposit'}>
        <CloseButton
          onClick={handleClose}
        >
          <IoClose size={20} />
        </CloseButton>
        <h1>
          {!transactionInfo.id ? 'Cadastrar' : 'Editar'} transação
        </h1>
        <form>
          <span>
            <h3>Valor Total: </h3>
            <p>R$ {(transactionInfo.weight || 0) * kgCalc}</p>
          </span>
          <input
            type="text"
            placeholder="Título"
            onChange={(e) => setTransactionInfo({
              ...transactionInfo,
              title: e.target.value
            })}
            value={transactionInfo.title}
          />
          <DualInputs>
            {transactionInfo.type === 'deposit'
              ? (
                <>
                  <input
                    type="number"
                    placeholder="Pagamento"
                    onChange={(e) => setTransactionInfo({
                      ...transactionInfo,
                      deposit: Number(e.target.value)
                    })}
                    value={transactionInfo.deposit ? transactionInfo.deposit : ''}
                    min={(transactionInfo.weight || 0) * kgCalc}
                  />
                  <input
                    type="number"
                    placeholder="kg"
                    onChange={(e) => setTransactionInfo({
                      ...transactionInfo,
                      weight: Number(e.target.value)
                    })}
                    value={transactionInfo.weight ? transactionInfo.weight : ''}
                  />
                </>
              ) : (
                <>
                  <input
                    type="number"
                    placeholder="Valor"
                    onChange={(e) => setTransactionInfo({
                      ...transactionInfo,
                      spent: Number(e.target.value)
                    })}
                    value={transactionInfo.spent ? transactionInfo.spent : ''}
                  />
                  <input
                    type="text"
                    placeholder="Categoria"
                    onChange={(e) => setTransactionInfo({
                      ...transactionInfo,
                      category: e.target.value
                    })}
                    value={transactionInfo.category}
                  />
                </>
              )}
          </DualInputs>

          <Options>
            <input
              type="radio"
              id="deposit"
              value="deposit"
              onChange={(e) => setTransactionInfo({
                ...transactionInfo,
                type: e.target.value
              })}
              checked={transactionInfo.type === 'deposit'}
            />
            <label htmlFor="deposit" className={transactionInfo.type === 'deposit' ? 'isChecked' : ''}>
              <BsArrowUpCircle size={20} />
              Entrada
            </label>

            <input
              type="radio"
              id="spent"
              onChange={(e) => setTransactionInfo({
                ...transactionInfo,
                type: e.target.value
              })}
              value="spent"
              checked={transactionInfo.type === 'spent'}
            />
            <label htmlFor="spent" className={transactionInfo.type === 'spent' ? 'isChecked' : ''}>
              <BsArrowDownCircle size={20} />
              Saída
            </label>
          </Options>

          <button type="button" onClick={handleSubmit}>
            Confirmar
          </button>
        </form>
      </Container>
    </Overlay>

  )
}