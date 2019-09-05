const filtersReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined
};
export default (state = filtersReducerDefaultState, action) => {
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
