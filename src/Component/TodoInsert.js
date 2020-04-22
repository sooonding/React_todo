import React from 'react';
//react-icons
import { MdFingerprint } from 'react-icons/md';
import './Todoinsert.scss';

const TodoInsert = () => {
  return (
    <form className="TodoInsert">
      <input placeholder="할 일을 입력하세요" />
      <button type="submit">
        <MdFingerprint />
      </button>
    </form>
  );
};

export default TodoInsert;
