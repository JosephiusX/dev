import React from 'react';
import { connect } from 'react-redux';
import TopicForm from './TopicForm';
import { editTopic, removeTopic } from '../../actions/topics';

const EditTopicPage = (props) => {
  return (
    <div>
      <TopicForm
        topic={props.topic}
        onSubmit={(topic) => {
          props.dispatch(editTopic(props.topic.id, topic));
          props.history.push('/topics');
        }}
      />
      <button onClick={() => {
        props.dispatch(removeTopic({ id: props.topic.id }));
        props.history.push('/topics');
      }}>Remove</button>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    topic: state.topics.find((topic) => topic.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditTopicPage);