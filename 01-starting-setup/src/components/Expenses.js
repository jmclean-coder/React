import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

export default function Expenses({ expensesData }) {
  function renderExpenseItems() {
    return expensesData.map((expenseItem) => {
        return <ExpenseItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
    });
  }
  return (
    <div className="expenses">
      {renderExpenseItems()}
    </div>
  );
}
