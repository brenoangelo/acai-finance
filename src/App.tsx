import { useState } from "react";
import { Header } from "./components/Header";
import { Modal } from "./components/Modal";
import { OverviewCards } from "./components/OverviewCards";
import { TransactionTable } from "./components/TransactionTable";

import { GlobalStyle } from "./styles/global";

export function App() {
  const [isOpen, setIsOpen] = useState(false)

  function openModal() {
    setIsOpen(true)
  }

  function closeModal() {
    setIsOpen(false)
  }

  return (
    <div className="App">
      <Header
        handleOpen={openModal}
      />
      <OverviewCards />
      <TransactionTable />
      {isOpen ? (
        <Modal
          handleClose={closeModal}
        />
      ) : <></>}

      <GlobalStyle />
    </div>
  );
}