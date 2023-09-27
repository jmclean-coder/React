import NewExpense from "components/NewExpense/FeatureComponents/NewExpense/NewExpense";
import Expenses from "components/Expenses/Expenses"

// our first component in action, the App component
const App = () => {
  const expensesData = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2023, 7, 14),
    },
    {
      id: "e2",
      title: "New TV",
      amount: 799.49,
      date: new Date(2023, 2, 12),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2023, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2023, 5, 12),
    },
  ];
  return (
    <div>
      <NewExpense />
      <Expenses expensesData={expensesData} />
    </div>
  );
}

export default App;