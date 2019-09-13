import moment from 'moment';
import {
  setStartDate,
  setEndDate,
  sortByAmount,
  sortByDate,
  setTextFilter
} from '../../actions/filters';

test('should generate setstart date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'SET_START_DATE',
    startDate: moment(0)
  });
});

test('should generate end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({
    type: 'SET_END_DATE',
    endDate: moment(0)
  });
});

test('should sort by amount', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
});

test('should sort by date', () => {
  const action = sortByDate();
  expect(action).toEqual({
    type: 'SORT_BY_DATE'
  });
});

test('should set text filter to value', () => {
  const action = setTextFilter('rent');
  expect(action).toEqual({
    type: 'SET_FILTER_TEXT',
    text: 'rent'
  });
});

test('should set text filter to null', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_FILTER_TEXT',
    text: ''
  });
});
