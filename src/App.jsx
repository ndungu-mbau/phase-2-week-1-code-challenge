import { useState } from "react";

import {
  Header,
  SearchInput,
  TransactionForm,
  TransactionTable,
} from "./components";

const genId = () => {
  return Math.random().toString().split(".")[1].slice(0, 10);
};

function App() {
  const [transactions, setTransactions] = useState([]);

  const onSubmitHandler = (evt, formState) => {
    evt.preventDefault();
    setTransactions((prev) => [...prev, { ...formState, id: genId() }]);
  };

  return (
    <div>
      <Header title="Bank Of Flatiron" />
      <SearchInput />
      <TransactionForm onSubmit={onSubmitHandler} />
      <TransactionTable transactions={transactions} />
    </div>
  );
}

export default App;
