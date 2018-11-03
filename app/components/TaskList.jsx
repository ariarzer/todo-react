import React from 'react';

import PropTypes from 'prop-types';

class TaskList extends React.Component {
  constructor(props) {
    super(props);

    this.generateList = this.generateList.bind(this);
  }

  generateList() {
    const { items = [] } = this.props;
    return items.map(({ text, id }) => <li key={id}>{text}</li>);
  }

  render() {
    return (
      <ol>{this.generateList()}</ol>
    );
  }
}

TaskList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
};

export default TaskList;
