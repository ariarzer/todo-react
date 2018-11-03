import React from 'react';

import PropTypes from 'prop-types';

function TaskList(props) {
  const { items = [] } = props;
  return (
    <ol>{items.map(({ text, id }) => <li key={id}>{text}</li>)}</ol>
  );
}

TaskList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
};

export default TaskList;
