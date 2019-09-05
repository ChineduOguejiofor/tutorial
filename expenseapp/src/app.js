import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

const expense1 = store.dispatch(
  addExpense({
    description: 'Water Bill',
    amount: 500,
    createdAt: 3999
  })
);

const expense2 = store.dispatch(
  addExpense({ description: 'Gas Bill', amount: 300, createdAt: 1000 })
);

store.dispatch(setTextFilter('bill'));

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
// console.log(store.getState());

ReactDOM.render(<AppRouter />, document.getElementById('app'));
