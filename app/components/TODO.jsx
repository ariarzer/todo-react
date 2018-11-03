import React from 'react';

import InputTask from './InputTask.jsx';
import TaskList from './TaskList.jsx';

export default class extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
    };

    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask(text) {
    this.setState({
      taskList: this.state.taskList.concat(text),
    });
  }

  render() {
    return <div>
      <InputTask addNewTask={this.addNewTask}/>
      <TaskList taskList={this.state.taskList}/>
    </div>
  }
}