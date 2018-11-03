import React from 'react';

class TaskList extends React.Component{
  constructor(props) {
    super(props);

    this.generateList = this.generateList.bind(this);
  }

  generateList() {
    return this.props.taskList.map(({text, id}) => <li key={id}>{text}</li>);
  }

  render() {
    return <div>
      <ol>{this.generateList()}</ol>
    </div>
  }
}

export default TaskList;
