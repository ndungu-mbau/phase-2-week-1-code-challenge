import PropTypes from "prop-types";

export const TransactionTable = ({ transactions }) => {
  return (
    <div className="container mx-auto">
      <table className="table-auto w-full mx-4 shadow">
        <thead>
          <tr className="bg-green-500 text-white text-left uppercase">
            <th className="px-4 py-2">Date</th>
            <th className="px-4 py-2">Description</th>
            <th className="px-4 py-2">Category</th>
            <th className="px-4 py-2">Amount</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b hover:bg-slate-500 hover:text-white even:bg-slate-100"
            >
              <td className="px-4 py-2">{transaction.date}</td>
              <td className="px-4 py-2">{transaction.description}</td>
              <td className="px-4 py-2">{transaction.category}</td>
              <td className="px-4 py-2">{transaction.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.object),
};
