import React from 'react';

import PropTypes from 'prop-types';

function TaskList(props) {
  const { items, onDone } = props;
  return (
    <ol>
      {Object.keys(items).map(id => (
        <li key={id}>
          {items[id].text}
          <input type="checkbox" checked={items[id].isDone} onChange={onDone.bind(null, id)} />
        </li>
      ))}
    </ol>
  );
}

TaskList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    id: PropTypes.string,
  })).isRequired,
  onDone: PropTypes.func.isRequired,
};

export default TaskList;
