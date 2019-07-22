import React from 'react'

const Counter = ({ debtsAmount }) => {
  return (
    <div className="debts-counter">
        <p className="debts-counter__title">Całkowita ilość spraw:</p>
        <p className="debts-counter__amount">{debtsAmount}</p>
    </div>
  );
};

export default Counter;