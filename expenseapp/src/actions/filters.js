export const setTextFilter = (text = '') => ({
  type: 'SET_FILTER_TEXT',
  text
});

export const sortByDate = () => ({
  type: 'SORT_BY_DATE'
});

export const sortByAmount = () => ({
  type: 'SORT_BY_AMOUNT'
});

export const setStartDate = (setdate = undefined) => ({
  type: 'SET_START_DATE',
  setdate
});
export const setEndDate = (enddate = undefined) => ({
  type: 'SET_END_DATE',
  enddate
});
