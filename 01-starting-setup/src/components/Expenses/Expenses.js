import Card from "components/UI/Card";
import ExpenseItem from "components/Expenses/FeatureComponents/ExpenseItem/ExpenseItem";
import ExpenseFilter from "components/Expenses/FeatureComponents/ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleFilterChange = selectedYear => {
    setFilteredYear(selectedYear)
  }
  const renderExpenseItems = () => {
    return expensesData.map((expenseItem) => {
      return (
        <ExpenseItem
          key={expenseItem.id}
          title={expenseItem.title}
          amount={expenseItem.amount}
          date={expenseItem.date}
        />
      );
    });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={handleFilterChange} />
        {renderExpenseItems()}
      </Card>
    </div>
  );
};
export default Expenses;
