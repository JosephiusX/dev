import React from 'react';
import { connect } from 'react-redux';
import NoteForm from './NoteForm';
import { editNote, removeNote } from '../../actions/notes';

const EditNotePage = (props) => {
  return (
    <div>
      <NoteForm
        note={props.note}
        onSubmit={(note) => {
          props.dispatch(editNote(props.note.id, note));
          props.history.push('/notes');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeNote({ id: props.note.id }));
        props.history.push('/notes');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    note: state.notes.find((note) => note.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditNotePage);