import {
  ADD_TODO,
  REMOVE_TODO,
} from '../actionTypes';

const initialState = {
  todos: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return { ...state, todos: [...state.todos, action.payload] };
    case REMOVE_TODO:
      const newTodos = state.todos.filter((todo) => todo.id !== action.payload);
      return { ...state, todos: newTodos };
    default:
      return state;
  }
};

export default reducer;