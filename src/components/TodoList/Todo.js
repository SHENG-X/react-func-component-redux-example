import React from 'react';
import { connect } from 'react-redux';
import { removeTodo } from "../../redux/actions";

const Todo = ({ removeTodo, todo }) => {
  return (
    <div>
      <div>
        <span>
          { todo.id }
        </span>
        -
        <span>
          { todo.content }
        </span>
      </div>
      <div>
        <button onClick={() => removeTodo(todo.id)}>
          Remove
        </button>
      </div>
      <hr/>
    </div>
  )
};

export default connect(
  null,
  { removeTodo },
)(Todo);
