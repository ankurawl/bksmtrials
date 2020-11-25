import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


class EmailForm extends React.Component {
  constructor(props) {
    super(props); 
    this.state = { 
      value: '' 
    }; 

    this.handleChange = this.handleChange.bind(this); 
    this.handleSubmit = this.handleSubmit.bind(this); 
  } 

  handleChange(event) {
   this.setState({ value: event.target.value }); 
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);

    //If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, 
    //  signals to the operation that caused event to be dispatched that it needs to be canceled.
    event.preventDefault(); // without this, pressing OK on the alert will clean the value in the text box. 
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>
          Email: 
          <input type="text" value={this.state.value} onChange={this.handleChange} /> 
        </label>
        <input type="submit" value="Submit" /> 
      </form>
    ); 
  }
}



// ========================================

ReactDOM.render(
  <EmailForm />,
  document.getElementById('root')
);
