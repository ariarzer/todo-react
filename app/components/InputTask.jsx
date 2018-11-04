import React from 'react';

import nanoid from 'nanoid';
import PropTypes from 'prop-types';

class InputTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.addTodo = this.addTodo.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  addTodo(e) {
    e.preventDefault();
    const { add } = this.props;
    const { value } = this.state;
    add({ text: value, id: nanoid(), isDone: false });
  }

  changeValue(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    const id = 'enteredNewTaskText';

    return (
      <form onSubmit={this.addTodo}>
        <label htmlFor={id}>Entered new task text:</label>
        <input type="text" id={id} onChange={this.changeValue} />

        <button type="submit">Add</button>
      </form>
    );
  }
}

InputTask.propTypes = {
  add: PropTypes.func.isRequired,
};

export default InputTask;
