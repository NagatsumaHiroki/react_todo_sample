import React from "react";

export const IncompleteTodos = (props) => {
  const { todos, onClickComplete, onClickDelete } = props;
  return (
    <div>
      <label>未完了</label>
      {console.log("------7777777777")}
      {console.log(todos)}
    </div>
  );
};
