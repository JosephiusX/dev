import React from 'react';
import { NavLink } from 'react-router-dom';

import NoteList from '../Notes/NoteList';
import NoteListFilters from '../Notes/NoteListFilters';


const NotesPage = () => (
  <div>
    <NavLink to="/create_note" activeClassName="is-active">Create Note</NavLink>
    <NoteListFilters />
    <NoteList />
  </div>
);

export default NotesPage;
   