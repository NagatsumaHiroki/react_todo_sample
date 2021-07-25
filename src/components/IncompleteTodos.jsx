import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <p>未完了</p>
      {todos.map((todo, index) => {
        return (
          <div key={index}>
            <span>タイトル：{todo.title}</span>
            <span>やること：{todo.todo}</span>
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
