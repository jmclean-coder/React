import "./ExpenseList.css";
import ExpenseItem from "components/Expenses/FeatureComponents/ExpenseItem/ExpenseItem";


const ExpenseList = ({ filteredResults }) => {
  console.log("render!");

  if (filteredResults.length === 0) {
    return <h2 className="expenses-list__fallback">No expenses found.</h2>;
  }

  return (
    <ul className="expenses-list">
      {filteredResults.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </ul>
  );
};

export default ExpenseList;