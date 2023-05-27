import React from 'react';

export default class PhraseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      phrases: props.phrase ? props.phrase.phrases : '',
      error: ''
    };
  }
  onPhrasesChange = (e) => {
    const phrases = e.target.value;
    this.setState(() => ({ phrases }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description) {
      this.setState(() => ({ error: 'Please provide phrase' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        phrases: this.state.phrases
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
            autoFocus
            placeholder="Add a phrases for your phrase (optional)"
            value={this.state.phrases}
            onChange={this.onPhrasesChange}
          />
          <button>Add phrase</button>
        </form>
      </div>
    )
  }
}