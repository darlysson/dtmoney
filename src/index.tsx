import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';

createServer({
  models: {
    transaction: Model
  },

  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: "Website Freelancing",
          type: "deposit",
          category: "Development",
          amount: 7.000,
          createdAt: new Date("02/02/2012"),
        },
        {
          id: 2,
          title: "House renting",
          type: "withdraw",
          category: "Rent",
          amount: 1.000,
          createdAt: new Date("05/03/2012"),
        }
      ],
    })
  },

  routes() {
    this.namespace = "api";

    this.get("transactions", () => {
      return this.schema.all("transaction");
    })

    this.post("/transactions", (schema, request) => {
      const data = JSON.parse(request.requestBody);
      return schema.create("transaction", data);
    })
  }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
