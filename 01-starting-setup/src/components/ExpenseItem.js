import './ExpenseItem.css';
const expenseDate = new Date(2023, 9, 18);
const expenseTitle = 'Car Insurance';
const expenseAmount = 294.67;

export default function ExpenseItem() {
  return (
    <div className='expense-item'>
      <div>{expenseDate.toISOString()}</div>
      <div className='expense-item__description'>
        <h2>{expenseTitle}</h2>
        <div className='expense-item__price'>${expenseAmount}</div>
      </div>
    </div>
  );
}
