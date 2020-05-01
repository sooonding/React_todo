import React, { useState, useCallback } from 'react';
//react-icons
import { MdFingerprint } from 'react-icons/md';
import './Todoinsert.scss';

const TodoInsert = ({ onInsert }) => {
  const [add, setAdd] = useState('');

  const onChange = useCallback((e) => {
    setAdd(e.target.value);
    console.log(e);
  }, []);
  //onSubmit
  const onSubmit = useCallback(
    (e) => {
      onInsert(add);
      setAdd('');
      //subMit 이벤트는 새로고침을 발생시키니 prevnetDefault 함수를 사용해 준다.
      console.log('useCallback_e :', e);
      e.preventDefault();
    },
    [onInsert, add],
  );
  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input placeholder="할 일을 입력하세요" value={add} onChange={onChange} />
      <button type="submit">
        <MdFingerprint />
      </button>
    </form>
  );
};

export default TodoInsert;
