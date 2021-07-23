import React from "react";

export const InputTodo = (props) => {
  const {
    todoTitle,
    todoText,
    onChangeTodoTitle,
    onChangeTodoText,
    onClick
  } = props;
  return (
    <div>
      <p>
        <label>タイトル:</label>
        <input
          placeholder="タイトルを入力"
          value={todoTitle}
          onChange={onChangeTodoTitle}
        />
      </p>
      <p>
        <label>やること:</label>
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
      </p>
      <button onClick={onClick}>追加</button>
    </div>
  );
};
