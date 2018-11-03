import React from 'react';

import PropTypes from 'prop-types';

function TaskList(props) {
  const { items } = props;
  return (
    <ol>{Object.keys(items).map(id => (<li key={id}>{items[id].text}</li>))}</ol>
  );
}

TaskList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
};

export default TaskList;
