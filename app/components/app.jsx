import React from 'react';

import InputTask from './InputTask.jsx';
import TaskList from './TaskList.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      taskList: {},
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.onDone = this.onDone.bind(this);
  }


  onDone(id) {
    const { taskList } = this.state;
    this.setState({
      taskList: {
        ...taskList,
        [id]: {
          ...taskList[id],
          isDone: !taskList[id].isDone,
        },
      },
    });
  }

  addNewTask({ id, ...payload }) {
    this.setState(prevState => ({
      taskList: { ...prevState.taskList, [id]: payload },
    }));
  }

  render() {
    const { taskList: items } = this.state;

    return (
      <div>
        <InputTask add={this.addNewTask} />
        <TaskList items={items} onDone={this.onDone} />
      </div>
    );
  }
}

export default App;
