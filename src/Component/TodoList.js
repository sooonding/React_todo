import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  console.log(todos);
  return (
    <div className="TodoList">
      {todos.map((todo) => {
        console.log('todo:', todo);
        return (
          <TodoListItem
            todo={todo}
            key={todo.id}
            onRemove={onRemove}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
