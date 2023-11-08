import React, { Component } from 'react';
import pythonScript from './components/pythonRunner';

class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pythonOutput: ''
    };
  }

  componentDidMount() {
    this.runPython();
  }

  async runPython() {
    try {
      const output = await pythonScript();
      this.setState({ pythonOutput: output });
    } catch (error) {
      console.error('Error executing the Python script:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Python Output:</h1>
        <p>{this.state.pythonOutput}</p>
      </div>
    );
  }
}

export default Page;
