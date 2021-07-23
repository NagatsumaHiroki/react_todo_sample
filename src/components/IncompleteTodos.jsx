import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, titles, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <p>未完了</p>
      {titles.map((title, index) => {
        return (
          <div key={title}>
            <span>{title}</span>
          </div>
        );
      })}
      {todos.map((todo, index) => {
        return (
          <div key={todo}>
            <span>{todo}</span>
            <div>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          </div>
        );
      })}
    </div>
  );
};
