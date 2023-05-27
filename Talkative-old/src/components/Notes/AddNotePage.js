import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { addNote } from '../../actions/notes';

const AddNotePage = (props) => (
  <div>
    <h1>Add Note</h1>
    <NoteForm
      onSubmit={(note) => {
        props.dispatch(addNote(note));
        props.history.push('/notes');
      }}
    />
  </div>
);

export default connect()(AddNotePage);