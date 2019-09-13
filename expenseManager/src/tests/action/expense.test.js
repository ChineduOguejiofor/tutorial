import { addExpense, editExpense, removeExpense } from '../../actions/expenses';

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123'
  });
});

test('should edit expense', () => {
  const action = editExpense('123', { note: 'this is a note' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123',
    updates: { note: 'this is a note' }
  });
});

test('should setup new expeses with values', () => {
  const expense = {
    description: 'car bill',
    note: 'my exp',
    amount: 12,
    createdAt: 23
  };
  const action = addExpense(expense);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: 'car bill',
      note: 'my exp',
      amount: 12,
      createdAt: 23
    }
  });
});

test('should setup new expeses with Default Values', () => {
  const action = addExpense();
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: {
      id: expect.any(String),
      description: '',
      note: '',
      amount: 0,
      createdAt: 0
    }
  });
});
