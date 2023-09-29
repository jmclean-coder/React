import Card from "components/UI/Card";
import ExpenseItem from "components/Expenses/FeatureComponents/ExpenseItem/ExpenseItem";
import ExpenseFilter from "components/Expenses/FeatureComponents/ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // typically we don't want to set a second state action that is the inverse of or dependent on on another state action

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredResults = expensesData.filter((expense) => expense.date.getFullYear().toString() === filteredYear);

  const renderExpenseItems = () => {
    return filteredResults.map((expense) => {
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
        {renderExpenseItems()}
      </Card>
    </div>
  );
};
export default Expenses;
