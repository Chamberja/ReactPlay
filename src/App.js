import React, { Component } from 'react';
import Button from './Button';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      count: 0,
      saved: 0,
      default: 0
    }
  }

  increase() {
    let count = this.state.count;
    this.updateCounter(count += 1);
  }

  decrease() {
    let count = this.state.count;
    this.updateCounter(count -= 1);
  }

  save() {
    this.setState({saved: this.state.count});
  }

  load() {
    this.updateCounter(this.state.saved);
  }

  reset() {
    this.updateCounter(this.state.default);
  }

  updateCounter(currentCount) {
    this.setState({count: currentCount})
  }

  test() {
    console.log('keksikus maximus');
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Counter</h2>
        </div>
        <div>
          <p>The Current Number Is: {this.state.count}</p>
          <div>
            <Button value="Increase" onClick={() => this.increase()}/>
            <Button value="Decrease" onClick={() => this.decrease()}/>
            <Button value="Save" onClick={() => this.save()}/>
            <Button value="Load" onClick={() => this.load()}/>
            <Button value="Reset" onClick={() => this.reset()}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
