import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { 
  createServer, 
  Model, 
  Registry 
} from 'miragejs'
import { ModelDefinition } from 'miragejs/-types'
import Schema from 'miragejs/orm/schema'

type Transaction = {
  id: number;
  title: string;
  type: string;
  deposit: number;
  spent: number;
  weight: number;
  createdAt: string;
}

const TransactionModel: ModelDefinition<Transaction> = Model.extend({})

type AppRegistry = Registry<
  {
    transaction: typeof TransactionModel
  },
  {}
>
type AppSchema = Schema<AppRegistry>

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {

    server.db.loadData({
      transactions : [
        {
          id: 1,
          title: 'Teste',
          type: 'deposit',
          deposit: 50,
          spent: 0,
          category: 'Vendas',
          weight: 1,
          createdAt: new Date('2022-02-01')
        },
        {
          id: 2,
          title: 'Luz',
          type: 'spent',
          deposit: 0,
          spent: 300,
          category: 'Contas',
          createdAt: new Date('2022-02-10')
        },
      ]
    })
  },

  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return this.schema.all('transaction')
    })

    this.post('/transactions', (schema, request) => {
      const data = JSON.parse(request.requestBody)

      return schema.create('transaction', data)
    })

    this.put('/transactions/:id', (schema: any, request) => {
      const data = JSON.parse(request.requestBody)
      const id = request.params.id
      const transaction = schema.find('transaction', id)

      return transaction?.update(data)
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);