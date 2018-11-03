import React from 'react';

import InputTask from './InputTask.jsx';
import TaskList from './TaskList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: [],
    };

    this.addNewTask = this.addNewTask.bind(this);
  }

  addNewTask(item) {
    this.setState(prevState => ({
      taskList: [...prevState.taskList, item],
    }));
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

export default App;
