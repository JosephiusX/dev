import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>TalkifyV2</h1>
    <NavLink to="/topics" activeClassName="is-active" exact={true}>Topics</NavLink>
    <NavLink to="/notes" activeClassName="is-active">Notes</NavLink>
  </header>
);

export default Header;
