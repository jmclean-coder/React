import ExpenseForm from 'components/NewExpense/FeatureComponents/ExpenseForm/ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {

    const saveExpenseDataHandler = (submittedExpenseData) => {
        const expenseData = {
            ...submittedExpenseData,
            id: Math.random().toString()
        };
      props.onAddExpense(expenseData);
    }
    return <div className='new-expense'>
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpense;