import Card from "components/UI/Card";
import ExpenseItem from "components/Expenses/FeatureComponents/ExpenseItem/ExpenseItem";
import ExpenseFilter from "components/Expenses/FeatureComponents/ExpenseFilter/ExpenseFilter";
import "./Expenses.css";
import { useState } from "react";

const Expenses = ({ expensesData }) => {
  const [filteredYear, setFilteredYear] = useState("2020");
  // typically we don't want to set a second state action that is the inverse of another state action
  // const [filterInfoText, setFilterInfoText] = useState("2019, 2021, 2022 & 2023")

  // because component get's rerendered, this derived state will apply.

  // let filterInfoText = "2019, 2021, 2022 & 2023";
  // if (filteredYear === "2019") {
  //   filterInfoText = "2020, 2021, 2022 & 2023";
  // } else if (filteredYear === "2021") {
  //   filterInfoText = "2019, 2020, 2022 & 2023";
  // } else if (filteredYear === "2022") {
  //   filterInfoText = "2019, 2020, 2021 & 2023";
  // } else if (filteredYear === "2023"){
  //   filterInfoText = "2019, 2020, 2021 & 2022";
  // }

  // shorter  - but does everyone understand unary operations?.. probably not.

  const allYears = [2019, 2020, 2021, 2022, 2023]
  const unselectedYears = allYears.filter(year => +year !== +filteredYear).join(", ");

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
        <p>Data for years {unselectedYears /*filterInfoText*/} is hidden</p>
        {renderExpenseItems()}
      </Card>
    </div>
  );
};
export default Expenses;
