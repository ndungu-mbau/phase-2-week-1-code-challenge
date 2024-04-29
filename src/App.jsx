import {
  Header,
  SearchInput,
  TransactionForm,
  TransactionTable,
} from "./components";

const INITIAL_TRANSACTIONS = [
  {
    id: 1,
    date: "2024-01-01",
    description: "Rent",
    category: "Rent",
    amount: 10000,
  },
  {
    id: 2,
    date: "2024-01-02",
    description: "Groceries",
    category: "Food",
    amount: 500,
  },
];

function App() {
  const onSubmitHandler = (evt, formState) => {
    evt.preventDefault();
    console.log({ evt, formState });
  };

  return (
    <div>
      <Header title="Bank Of Flatiron" />
      <SearchInput />
      <TransactionForm onSubmit={onSubmitHandler} />
      <TransactionTable transactions={INITIAL_TRANSACTIONS} />
    </div>
  );
}

export default App;
