import React, { Fragment } from 'react';
import Users from '../users/User';
import Search from '../users/Search';
const Home = () => (
  <Fragment>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
