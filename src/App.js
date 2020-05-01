import React, { useState, useRef, useCallback } from 'react';
import TodoTemplate from './Component/TodoTemplate';
import TodoInsert from './Component/TodoInsert';
import TodoList from './Component/TodoList';

function App() {
  const [todos, setTodos] = useState([
    { id: 1, text: '리액트 공부하기', checked: false },
    { id: 2, text: '일어나기', checked: true },
  ]);
  console.log('todos :', todos);
  //고유값 사용하는 id,
  //ref를 사용하여 변수에 담기
  const nextId = useRef(3);
  const onInsert = useCallback(
    (text) => {
      const todo = { id: nextId.current, text, checked: false };
      setTodos(todos.concat(todo));
      nextId.current += 1;
    },
    [todos],
  );
  const onRemove = useCallback(
    (id) => {
      console.log('removeID:', id);
      setTodos(todos.filter((todo) => id !== todo.id));
    },
    [todos],
  );
  const onToggle = useCallback(
    (id) => {
      setTodos(
        todos.map((todo) =>
          todo.id === id ? { ...todo, checked: !todo.checked } : todo,
        ),
      );
    },
    [todos],
  );
  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert}></TodoInsert>
      <TodoList
        todos={todos}
        onRemove={onRemove}
        onToggle={onToggle}
      ></TodoList>
    </TodoTemplate>
  );
}

export default App;
