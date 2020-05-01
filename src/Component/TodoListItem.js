import React from 'react';
import './TodoListItem.scss';
import { MdCheckBoxOutlineBlank, MdCheckBox, MdDelete } from 'react-icons/md';
import cn from 'classnames';
const TodoListItem = ({ todo, onRemove, onToggle }) => {
  const { id, text, checked } = todo;

  return (
    <div className="TodoListItem">
      <div
        className={cn('checkbox', { checked })}
        onClick={() => {
          onToggle(id);
        }}
      >
        {/* why cn ??? */}
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{text}</div>
      </div>
      <div
        className="remove"
        onClick={() => {
          console.log('delete');
          onRemove(id);
        }}
      >
        <MdDelete />
      </div>
    </div>
  );
};

export default TodoListItem;
