import React from 'react';

import nanoid from 'nanoid';

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
    this.props.addNewTask({text: this.state.value, id: nanoid()});
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
