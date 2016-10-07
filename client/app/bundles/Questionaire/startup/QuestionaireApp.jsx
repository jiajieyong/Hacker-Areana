import React from 'react';
import ReactOnRails from 'react-on-rails';
import Questionaire from '../containers/Questionaire';

const QuestionaireApp = (props) => (
  <Questionaire {...props} />
);

// This is how react_on_rails can see the HelloWorldApp in the browser.
ReactOnRails.register({ QuestionaireApp });