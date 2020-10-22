import React from 'react';
import { connect } from 'react-redux';

import Todo from './Todo';

const TodoList = ({ todos }) => {
  return (
    <div>
      {
        todos.map((todo) => <Todo todo={todo} key={todo.id}/>)
      }
    </div>
  );
};

const mapStateToProps = (state) => {
  return { ...state.todos };
}

export default connect(
  mapStateToProps,
)(TodoList);
