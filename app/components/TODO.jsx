import React from 'react';

import InputTask from './InputTask.jsx';
import TaskList from './TaskList.jsx';

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
    };

    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask(item) {
    const { taskList } = this.state;
    this.setState({
      taskList: taskList.concat(item),
    });
  }

  render() {
    const { taskList: items } = this.state;

    return (
      <div>
        <InputTask add={this.addNewTask} />
        <TaskList items={items} />
      </div>
    );
  }
}
