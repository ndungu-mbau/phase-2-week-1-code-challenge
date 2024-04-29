import { useState, useEffect } from "react";

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
  const [search, setSearch] = useState("");
  const [transactions, setTransactions] = useState([]);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  const onSubmitHandler = (formState) => {
    setTransactions((prev) => [...prev, { ...formState, id: genId() }]);
  };

  const onSearchCange = (evt) => {
    setSearch(evt.target.value);
  };

  useEffect(() => {
    if (search.length === 0) {
      setFilteredTransactions(transactions);
    } else {
      setFilteredTransactions(
        transactions.filter((transaction) =>
          transaction.description.toLowerCase().includes(search.toLowerCase())
        )
      );
    }
  }, [search, transactions]);

  return (
    <div>
      <Header title="Bank Of Flatiron" />
      <SearchInput value={search} onChange={onSearchCange} />
      <TransactionForm onSubmit={onSubmitHandler} />
      <TransactionTable transactions={filteredTransactions} />
    </div>
  );
}

export default App;
