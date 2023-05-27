import React from 'react';
import { NavLink } from 'react-router-dom';

import PhraseListFilters from './PhraseListFilters';
import PhraseList from './PhraseList';

const PhrasesPage = () => (
  <div>
    <NavLink to="/create_phrase" activeClassName="is-active">Create Phrase</NavLink>
    <PhraseListFilters />
    <PhraseList />
  </div>
);

export default PhrasesPage;
   