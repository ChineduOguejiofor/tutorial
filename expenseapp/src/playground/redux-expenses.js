import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({
  description = '',
  note = '',
  amount = 0,
  createAt = 0
} = {}) => ({
  type: 'ADD_EXPENSE',
  expense: {
    id: uuid(),
    description,
    note,
    amount,
    createAt
  }
});

const removeExpense = ({ id }) => ({
  type: 'REMOVE_EXPENSE',
  id
});
const editExpense = (id, updates) => ({
  type: 'EDIT_EXPENSE',
  id,
  updates
});
const setTextFilter = (text = '') => ({
  type: 'SET_FILTER_TEXT',
  text
});

const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

const setStartDate = (setdate = undefined) => ({
  type: 'SET_START_DATE',
  setdate
});
const setEndDate = (enddate = undefined) => ({
  type: 'SET_END_DATE',
  enddate
});

const expensesReducerDefaultState = [];

const expensesReducer = (state = expensesReducerDefaultState, action) => {
  switch (action.type) {
    case 'ADD_EXPENSE':
      return [...state, action.expense];
    case 'REMOVE_EXPENSE':
      return state.filter(({ id }) => id !== action.id);
    case 'EDIT_EXPENSE':
      return state.map(expense => {
        if (expense.id === action.id) {
          return {
            ...expense,
            ...action.updates
          };
        } else {
          return expense;
        }
      });

    default:
      return state;
  }
};

const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
const filtersReducer = (state = filtersReducerDefaultState, action) => {
  switch (action.type) {
    case 'SET_FILTER_TEXT':
      return {
        ...state,
        text: action.text
      };
    case 'SORT_BY_DATE':
      return {
        ...state,
        sortBy: 'date'
      };
    case 'SORT_BY_AMOUNT':
      return {
        ...state,
        sortBy: 'Amount'
      };
    case 'SET_START_DATE':
      return {
        ...state,
        startDate: action.setdate
      };
    case 'SET_END_DATE':
      return {
        ...state,
        endDate: action.enddate
      };
    default:
      return state;
  }
};
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
  return expenses
    .filter(expense => {
      const startDateMatch =
        typeof startDate !== 'number' || expense.createAt >= startDate;
      const endDateMatch =
        typeof endDate !== 'number' || expense.createAt <= endDate;
      const textMatch = expense.description.toLocaleLowerCase().includes(text);

      return startDateMatch && endDateMatch && textMatch;
    })
    .sort((a, b) => {
      if (sortBy === 'date') {
        return a.createAt < b.createAt ? 1 : -1;
      } else if (sortBy === 'Amount') {
        return a.amount < b.amount ? 1 : -1;
      }
    });
};

const store = createStore(
  combineReducers({
    expenses: expensesReducer,
    filters: filtersReducer
  })
);
store.subscribe(() => {
  const state = store.getState();
  const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
  console.log(visibleExpenses);
});

const expenseOne = store.dispatch(
  addExpense({ description: 'Rent', amount: 700, createAt: -21000 })
);
const expenseTwo = store.dispatch(
  addExpense({ description: 'Coffee', amount: 300, createAt: -11000 })
);
const expenseThree = store.dispatch(
  addExpense({ description: 'Soup', amount: 500, createAt: -10 })
);
const expenseFour = store.dispatch(
  addExpense({ description: 'Salad', amount: 900, createAt: 9000 })
);
// store.dispatch(removeExpense({ id: expenseOne.expense.id }));
// store.dispatch(
//   editExpense(expenseTwo.expense.id, { amount: 500, createAt: 100 })
// );
// store.dispatch(setTextFilter('asdf'));
// store.dispatch(setTextFilter(''));

store.dispatch(sortByDate());
// store.dispatch(sortByAmount());

// store.dispatch(setStartDate(0));
// // store.dispatch(setStartDate());
// store.dispatch(setEndDate(99));

const demoState = {
  expenses: [
    {
      id: 'asldasdf',
      description: 'January Rent',
      note: 'This is a note',
      amount: 54300,
      createAt: 0
    }
  ],
  filters: {
    text: 'rent',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  }
};
