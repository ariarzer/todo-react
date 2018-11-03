import React from 'react';

class InputTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  addNewTask(e) {
    this.props.addNewTask(this.state.value);
  }

  changeValue(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return <div>
      <input type="text" onChange={this.changeValue}/>
      <button onClick={this.addNewTask}>Add</button>
    </div>
  }
}

export default InputTask;
