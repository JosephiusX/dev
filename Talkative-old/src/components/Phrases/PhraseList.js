import React from 'react';
import { connect } from 'react-redux';
import PhraseListItem from './PhraseListItem';
import selectPhrases from '../../selectors/phrases';

const PhraseList = (props) => (
  <div>
    <h1>Phrase List</h1>
    {props.phrases.map((phrase) => {
      return <PhraseListItem key={phrase.id} {...phrase} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    phrases: selectPhrases(state.phrases, state.filters)
  };
};

export default connect(mapStateToProps)(PhraseList);
