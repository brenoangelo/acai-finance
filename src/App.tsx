import { useState } from "react";
import { FilterOptions } from "./components/FilterOptions";
import { Header } from "./components/Header";
import { TransactionsProvider } from "./components/hooks/useTransactions";
import { Modal } from "./components/Modal";
import { OverviewCards } from "./components/OverviewCards";
import { TransactionTable } from "./components/TransactionTable";

import { GlobalStyle } from "./styles/global";
import { Filter, Transaction } from "./types";

export function App() {
  const [isOpen, setIsOpen] = useState(false)
  const [transaction, setTransaction] = useState<Transaction>({} as Transaction)
  const [filterOpt, setFilterOpt] = useState<Filter>({} as Filter)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
    setTransaction({} as Transaction)
  }

  function openEditTransaction(transaction: Transaction) {
    setTransaction(transaction)
    openModal()
  }

  function filterTransactions(filter: Filter) {
    setFilterOpt(filter)
  }

  return (
    <div className="App">
      <TransactionsProvider>
        <Header
          handleOpen={openModal}
        />
        <OverviewCards />
        <FilterOptions 
          filterTransactions={filterTransactions}
        />
        <TransactionTable 
          openEditTransaction={openEditTransaction}
          filterOpt={filterOpt}
        />
        {isOpen ? (
          <Modal
            handleClose={closeModal}
            transaction={transaction}
          />
        ) : <></>}

        <GlobalStyle />
      </TransactionsProvider>
    </div>
  );
}