import { useState } from "react";
import PropTypes from "prop-types";

export const TransactionForm = ({ onSubmit }) => {
  const [formState, setFormState] = useState({
    date: `${new Date().getFullYear()}-${new Date().getMonth()}-${new Date().getDate()}`,
    description: "",
    category: "",
    amount: 0,
  });

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const submitHandler = (evt) => {
    evt.preventDefault();
    onSubmit(formState);
    setFormState({
      date: `${new Date().getFullYear()}-${new Date().getUTCMonth()}-${new Date().getDate()}`,
      description: "",
      category: "",
      amount: 0,
    });
  };

  return (
    <div className="flex justify-around m-8 flex-row shadow">
      <form onSubmit={submitHandler}>
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id="date"
          placeholder="Select Date"
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-8"
          value={formState.date}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="description"
          placeholder="Description"
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-8"
          value={formState.description}
          onChange={onChangeHandler}
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-8"
          value={formState.category}
          onChange={onChangeHandler}
        />
        <input
          type="number"
          name="amount"
          placeholder="Amount"
          className="shadow border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline m-8"
          value={formState.amount}
          onChange={onChangeHandler}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-green-500 text-white py-2 px-4 rounded-sm"
        />
      </form>
    </div>
  );
};

TransactionForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
