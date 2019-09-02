import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <div>
    <header>
      <h1>Expensify</h1>
    </header>
    <NavLink to='/' activeClassName={'is-active'} exact={true}>
      Go Home
    </NavLink>
    <NavLink to='/create' activeClassName={'is-active'}>
      Add New Expense
    </NavLink>
    <NavLink to='/edit' activeClassName={'is-active'}>
      Update Expense
    </NavLink>
    <NavLink to='/help' activeClassName={'is-active'}>
      Ask Question
    </NavLink>
  </div>
);

export default Header;
