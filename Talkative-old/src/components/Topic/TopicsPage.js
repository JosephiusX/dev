import React from 'react';
import { NavLink } from 'react-router-dom';

import TopicListFilters from './TopicListFilters';
import TopicList from './TopicList';

const TopicsPage = () => (
  <div>
    <NavLink to="/create_topic" activeClassName="is-active">Create Topic</NavLink>
    <TopicListFilters />
    <TopicList />
  </div>
);

export default TopicsPage;
   