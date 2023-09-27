import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = () => {
    // 1: Individual functions for each field
    const [inputAmount, setInputAmount] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [inputTitle, setInputTitle] = useState('');

    // 2: Single object FormData State
    // const [formData, setFormData] = useState({
    //     inputAmount: '',
    //     inputDate: '',
    //     inputTitle: '',
    // });
    // Whenever I have a state update that depends on the previous state, I should use the arror function syntax that consumes the "prevState"

    // const handleAmountChange = (e) => {
    //     console.log(e.target.value)
    //     setFormData((prevState) => {
    //         return { ...prevState, inputAmount: e.target.value }
    //     });
    // };
    // const handleDateChange = (e) => {
    //     console.log(e.target.value)
    //     setFormData((prevState) => {
    //         return { ...prevState, inputDate: e.target.value }
    //     });
    // };
    // const handleTitleChange = (e) => {
    //     console.log(e.target.value)
    //     setFormData((prevState => {
    //         return {...prevState, inputTitle: e.target.value }
    //     }));
    // };

    // 3: Generalized change handler with manual flow control mapping
    const inputChangeHandler = (identifier, value) => {
        if (identifier === 'amount') {
            setInputAmount(value);
        } else if (identifier === 'date') {
            setInputDate(value);
        } else if (identifier === 'title') {
            setInputTitle(value);
        }
    }

  return (
    <form>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Amount</label>
          <input
        //   onChange={handleAmountChange} /** 2 */
          onChange={ (e) => { inputChangeHandler("amount",e.target.value) } } /** 3 */
          type="number"
          min="0.01"
          step="0.01" />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
        //   onChange={handleDateChange} /** 2 */
          onChange={ (e) => { inputChangeHandler("date",e.target.value) } } /** 3 */
          type="date"
          min="2019-01-01"
          max="2025-12-31" />
        </div>
        <div className="new-expense__control">
          <label>Title</label>
          <input
        //   onChange={handleTitleChange} /** 2 */
          onChange={ (e) => { inputChangeHandler("title",e.target.value) } } /** 3 */
          type="text" />
        </div>
      </div>
      <div className="new-expense__actions">
        <button
        type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
