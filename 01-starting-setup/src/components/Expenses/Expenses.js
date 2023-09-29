import Card from "components/UI/Card";
import ExpenseItem from "components/Expenses/FeatureComponents/ExpenseItem/ExpenseItem";
import ExpenseFilter from "components/Expenses/FeatureComponents/ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  let expensesContent = <p> No expenses found.</p>

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredResults = expensesData.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  if (filteredResults.length) {
    expensesContent = filteredResults.map((expense) => {
      return (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      );
    });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={handleFilterChange}
        />
        {expensesContent}
      </Card>
    </div>
  );
};
export default Expenses;
