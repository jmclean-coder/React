import NewExpense from "components/NewExpense/FeatureComponents/NewExpense/NewExpense";
import Expenses from "components/Expenses/Expenses";
import { useState } from "react";

// our first component in action, the App component
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Kitchen Aid",
    amount: 694.12,
    date: new Date(2019, 11, 15),
  },
  {
    id: "e2",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2021, 7, 14),
  },
  {
    id: "e3",
    title: "New Shoes",
    amount: 157.99,
    date: new Date(2021, 6, 14),
  },
  {
    id: "e4",
    title: "New TV",
    amount: 799.49,
    date: new Date(2022, 2, 12),
  },
  {
    id: "e5",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2019, 2, 28),
  },
  {
    id: "e6",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2023, 5, 5),
  },
  {
    id: "e7",
    title: "New Monitor",
    amount: 864.47,
    date: new Date(2023, 5, 13),
  },
  {
    id: "e8",
    title: "New Chair (Wooden)",
    amount: 175.37,
    date: new Date(2023, 5, 10),
  },
  {
    id: "e9",
    title: "Blender",
    amount: 300,
    date: new Date(2020, 11, 10),
  },
];
const App = () => {
  const [expensesData, setExpensesData] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = expense => {
    console.log("Hi from App.js!", expense);
    setExpensesData(prevExpensesData=> {
      return [expense, ...expensesData]
    })
  }
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler}/>
      <Expenses expensesData={expensesData} />
    </div>
  );
}

export default App;