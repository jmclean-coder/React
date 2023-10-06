import { useState } from "react";
import ExpenseForm from "components/NewExpense/FeatureComponents/ExpenseForm/ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [showForm, setShowForm] = useState(false);

  const saveExpenseDataHandler = (submittedExpenseData) => {
    const expenseData = {
      ...submittedExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const showExpenseFormHandler = () => {
    setShowForm(!showForm);
  };

  return (
    <div className="new-expense">
      {/* {showForm ?
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} showExpenseFormHandler={showExpenseFormHandler}/>
       :
        <button onClick={showExpenseFormHandler}>Add Expense</button>
      } */}

      {!showForm &&
        <button onClick={showExpenseFormHandler}>Add Expense</button>
      }
      {showForm &&
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          showExpenseFormHandler={showExpenseFormHandler}
        />
      }
    </div>
  );
};

export default NewExpense;
