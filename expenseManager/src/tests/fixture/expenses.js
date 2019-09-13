import moment from 'moment';

export default [
  {
    id: '1',
    description: 'Water Bill',
    note: '',
    amount: 1000,
    createdAt: 0
  },
  {
    id: '2',
    description: 'Transport',
    note: '',
    amount: 450,
    createdAt: moment(0)
      .subtract(4, 'days')
      .valueOf()
  },
  {
    id: '3',
    description: 'Dinner',
    note: '',
    amount: 2500,
    createdAt: moment(0)
      .add(4, 'days')
      .valueOf()
  }
];
