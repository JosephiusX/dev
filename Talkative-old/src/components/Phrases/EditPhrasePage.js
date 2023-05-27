import React from 'react';
import { connect } from 'react-redux';
import PhraseForm from './PhraseForm';
import { editPhrase, removePhrase } from '../../actions/phrases';

const EditPhrasePage = (props) => {
  return (
    <div>
      <PhraseForm
        phrase={props.phrase}
        onSubmit={(phrase) => {
          props.dispatch(editPhrase(props.phrase.id, phrase));
          props.history.push('/phrases');
        }}
      />
      <button onClick={() => {
        props.dispatch(removePhrase({ id: props.phrase.id }));
        props.history.push('/phrases');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    phrase: state.phrases.find((phrase) => phrase.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditPhrasePage);