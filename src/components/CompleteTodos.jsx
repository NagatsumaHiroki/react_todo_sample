import React from "react";

export const CompleteTodos = (props) => {
  const { completeTodos, onClickBack } = props;
  return (
    <div>
      <p>完了のTODO</p>
      <ul>
        {completeTodos.map((todo, index) => {
          return (
            <div key={index}>
              <span>タイトル：{todo.title}</span>
              <span>やること：{todo.todo}</span>
              <button onClick={() => onClickBack(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
