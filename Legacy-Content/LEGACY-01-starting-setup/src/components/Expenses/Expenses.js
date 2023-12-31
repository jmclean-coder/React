import Card from "components/UI/Card";
import ExpenseFilter from "components/Expenses/FeatureComponents/ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";
import ExpenseList from "components/Expenses/FeatureComponents/ExpenseList/ExpenseList";
import ExpensesChart from "components/Expenses/FeatureComponents/ExpensesChart/ExpensesChart";
const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = expensesData.filter(expense => expense.date.getFullYear().toString() === filteredYear);

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter
          selected={filteredYear}
          onChangeFilter={handleFilterChange}
        />
        <ExpensesChart expenses={filteredExpenses}/>
        <ExpenseList filteredExpenses={filteredExpenses}/>
      </Card>
    </div>
  );
};
export default Expenses;
