import React from 'react';

export default class TopicForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.topic ? props.topic.description : '',
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please provide description' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
      });
    }
  };
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
            placeholder="description here"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
      
          <button>Add topic</button>
        </form>
      </div>
    )
  }
}