import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
// { id, description, amount, createdAt }
const ExpenseListItem = ({
  history,
  dispatch,
  id,
  description,
  amount,
  createdAt
}) => (
  <div>
    <h3>Title: {description}</h3>
    <p>
      Amount: {amount} - Created At: {createdAt}
    </p>
    <h3>{id}</h3>
    <Link to='/edit'>Go home</Link>
    <button
      onClick={e => {
        dispatch(removeExpense({ id }));
      }}
    >
      Remove
    </button>
  </div>
);

const mapStateToProps = state => {
  return {
    expense: state.expense
  };
};
export default connect(mapStateToProps)(ExpenseListItem);
