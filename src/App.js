import React from 'react';
import TodoTemplate from './Component/TodoTemplate';
import TodoInsert from './Component/TodoInsert';

function App() {
  return (
    <TodoTemplate>
      <TodoInsert></TodoInsert>
    </TodoTemplate>
  );
}

export default App;
