import React from 'react';
import { connect } from 'react-redux';
import PhraseForm from './PhraseForm';
import { addPhrase } from '../../actions/phrases';

const AddPhrasePage = (props) => (
  <div>
    <h1>Add Phrase</h1>
    <PhraseForm
      onSubmit={(phrase) => {
        props.dispatch(addPhrase(phrase));
        props.history.push('/phrases');
      }}
    />
  </div>
);

export default connect()(AddPhrasePage);
