import React from 'react';
import { connect } from 'react-redux';
import TopicListItem from './TopicListItem';
import selectTopics from '../../selectors/topics';

const TopicList = (props) => (
  <div>
    <h1>Topics List</h1>
    {props.topics.map((topic) => {
      return <TopicListItem key={topic.id} {...topic} />;
    })}
  </div>
);

const mapStateToProps = (state) => {
  return {
    topics: selectTopics(state.topics, state.filters)
  };
};

export default connect(mapStateToProps)(TopicList);
