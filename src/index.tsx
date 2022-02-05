import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';

import { createServer } from 'miragejs'

createServer({
  routes() {
    this.namespace = 'api'

    this.get('/transactions', () => {
      return [
        {
          id: 1,
          title: 'Transaction 1',
          amount: 50,
          change: 25,
          weight: 1,
          type: 'deposit',
          createdAt: new Date()
        },
        {
          id: 2,
          title: 'Aluguel do ponto',
          amount: 1600,
          change: 0,
          weight: 0,
          category: 'Aluguel',
          type: 'spent',
          createdAt: new Date()
        }
      ]
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
