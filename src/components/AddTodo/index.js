import React, { useState } from 'react';
import { connect } from 'react-redux';

import { addTodo } from '../../redux/actions';

const AddTodo = ({ addTodo }) => {
  const [item, setItem] = useState('');
  return (
    <div>
      <input value={item} onChange={(e) => setItem(e.target.value)}/>
      <button onClick={() => { addTodo(item); setItem('');}}>Add</button>
    </div>
  );
};

export default connect(
  null,
  { addTodo },
)(AddTodo);
