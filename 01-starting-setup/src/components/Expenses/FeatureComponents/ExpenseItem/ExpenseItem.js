import React, { useState } from "react";
import Card from "components/UI/Card";
import ExpenseDate from "components/Expenses/FeatureComponents/ExpenseDate/ExpenseDate";
import "./ExpenseItem.css";

const ExpenseItem = ({ date, title, amount }) => {

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
    </Card>
  );
};

export default ExpenseItem;
