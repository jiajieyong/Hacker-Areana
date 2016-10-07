import React, { PropTypes } from 'react';
import QuestionaireWidget from '../components/QuestionaireWidget';

// Simple example of a React "smart" component
export default class Questionaire extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props, context) {
    super(props, context);
    this.state = { name: this.props.name };
  }

  updateName(name) {
    this.setState({ name });
  }

  render() {
    return (
      <div>
        <QuestionaireWidget name={this.state.name} updateName={e => this.updateName(e)}/>
      </div>
    );
  }
}
