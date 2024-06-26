import React from 'react';
import PropTypes from 'prop-types';

function TodoItem({ date, text }) {
  const styles = {
    todoItem: {
      display: 'flex',
      alignItems: 'center',
      marginBottom: '10px',
    },
    todoDate: {
      width: '50px',
      height: '48px',
      background: '#D9D9D9',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '16px',
      marginRight: '8px',
    },
    todoText: {
      flexGrow: '1',
      height: '48px',
      background: '#D9D9D9',
      borderRadius: '5px',
      display: 'flex',
      alignItems: 'center',
      paddingLeft: '20px',
      fontSize: '20px',
      boxSizing: 'border-box',
    },
  };

  return (
    <li style={styles.todoItem}>
      <span style={styles.todoDate}>{date}</span>
      <span style={styles.todoText}>{text}</span>
    </li>
  );
}

TodoItem.propTypes = {
  date: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export default TodoItem;
