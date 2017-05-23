import React, { Component } from 'react';

class Button extends Component {
  constructor(props) {
    super();
    this.value = props.value;
    this.onClick = props.onClick;
  }

  render() {
    return (
      <input
        type='submit'
        value={this.value}
        onClick={this.onClick}
      />
    )
  }
}

export default Button;
