import React, { PropTypes } from 'react';
var AccountFields = require('./AccountFields')
// var SurveyFields  = require('./SurveyFields')
// var Confirmation  = require('./Confirmation')
// var Success       = require('./Success')

var fieldValues = {
  name     : null,
  email    : null,
  password : null,
  age      : null,
  colors   : []
}

export default class QuestionaireWidget extends React.Component {
	
	constructor(props, context) {
    super(props, context);
    this.state = { step: 1 };
  	}

	saveValues(fields) {
	  return function() {
	    fieldValues = Object.assign({}, fieldValues, fields)
	  }
	}

	nextStep() {
	  this.state = { step : this.state.step + 1 } 
	}

	previousStep() {
	  this.state = { step : this.state.step - 1 } 
	}

	render() {
		switch (this.state.step) {
			case 1:
				return <AccountFields fieldValues={fieldValues} saveValues={this.saveValues}/>
			// case 2:
			// 	return <SurveyFields />
			// case 3:
			// 	return <Confirmation />
			// case 4:
			// 	return <Success />
		}
	}
}