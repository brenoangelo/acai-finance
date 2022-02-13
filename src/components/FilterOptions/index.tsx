import { Container, InputGroup } from "./styles";

import { FaSearchDollar } from 'react-icons/fa'
import { useTransactions } from "../hooks/useTransactions";
import { FormEvent, useEffect, useMemo, useState } from "react";
import { Filter } from "../../types";

type FilterOptionsProps = {
  filterTransactions: (filter: Filter) => void;
}

const initialValues = {
  category: '',
  date: '',
  search: '',
}

export function FilterOptions({ filterTransactions }: FilterOptionsProps) {
  const { transactions } = useTransactions()
  const [categoryList, setCategoryList] = useState<(string | undefined)[]>([])
  const [filter, setFilter] = useState<Filter>(initialValues)

  useEffect(() => {
    if(!transactions.length) {
      setCategoryList([])
      return;
    }
    const transactionsCategory = transactions.map(transaction => {
      if(!transaction.category) {
        return;
      }
  
      return transaction.category
    })

    setCategoryList(() => (
      transactionsCategory.filter((item, index) => {
        return !transactionsCategory.includes(item, index+1)
      })
    ))

  }, [transactions])

  useEffect(() => {
    filterTransactions(filter)
  }, [filter])

  return (
    <Container>
      <InputGroup>
        <label>Categoria</label>
        <select 
          value={filter.category} 
          onChange={event => setFilter({...filter, category: event.target.value})}
          name="category"
        >
          <option value="">Todos</option>
          {categoryList.map(option => (
            <option 
              value={option?.toLowerCase()}
              key={option}
            >
              {option}
            </option>
          ))}
        </select>
      </InputGroup>

      <InputGroup>
        <label>Data</label>
        <input 
          type="date" 
          value={filter.date}
          onChange={event => setFilter({...filter, date: event.target.value})}
        />
      </InputGroup>

      <InputGroup>
        <FaSearchDollar />
        <input 
          type="search" 
          value={filter.search}
          onChange={event => setFilter({...filter, search: event.target.value})}
        />
      </InputGroup>
    </Container>
  )
}