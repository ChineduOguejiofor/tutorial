import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import configureStore from '../src/store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(
  addExpense({ description: 'Water Bill', createdAt: 235, amount: 500 })
);

store.dispatch(
  addExpense({ description: 'Rent', createdAt: 3999, amount: 700 })
);
store.dispatch(
  addExpense({ description: 'Gas Bill', createdAt: 1000, amount: 100 })
);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

const jsx = (
  <Provider store={store}>
    <AppRouter />;
  </Provider>
);
ReactDOM.render(jsx, document.getElementById('app'));
