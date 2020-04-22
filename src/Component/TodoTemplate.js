import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => {
  return (
    <div className="TodoTemplate">
      <div className="appTitle">일정 관리</div>
      {/* children에 내부 jsx를 props로 받아 와서 렌더링 */}
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
