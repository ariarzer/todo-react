import React from 'react';

import nanoid from 'nanoid';
import PropTypes from 'prop-types';

class InputTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };

    this.addNewTask = this.addNewTask.bind(this);
    this.changeValue = this.changeValue.bind(this);
  }

  addNewTask() {
    const { add } = this.props;
    const { value } = this.state;
    add({ text: value, id: nanoid() });
  }

  changeValue(e) {
    this.setState({
      value: e.target.value,
    });
  }

  render() {
    return (
      <form>
        <input type="text" onChange={this.changeValue} />
        <button onClick={this.addNewTask} type="submit">Add</button>
      </form>
    );
  }
}

InputTask.propTypes = {
  add: PropTypes.func.isRequired,
};

export default InputTask;
