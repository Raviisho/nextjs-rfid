import React from 'react';
import { runPythonScript } from './components/pythonRunner';

class Page extends React.Component {
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
      const output = await runPythonScript();
      this.setState({ pythonOutput: output });
    } catch (error) {
      console.error('Error al ejecutar el script de Python:', error);
    }
  }

  render() {
    return (
      <div>
        <h1>Resultado de Python:</h1>
        <p>{this.state.pythonOutput}</p>
      </div>
    );
  }
}

export default Page;