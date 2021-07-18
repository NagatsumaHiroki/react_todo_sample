import React, { useEffect, useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";

export const App = () => {
  const [todoText, setTodotext] = useState("");
  const [icompleteTodos, setIncompleteTodos] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  //入力時にsetTodotextに値を設定
  const onChangeTodoText = (event) => setTodotext(event.target.value);

  //登録処理
  const onClickAdd = () => {
    if (todoText === "") return;
    const newTodos = [...icompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    alert(todoText);
    setTodotext("");
  };

  //削除処理
  const onClickDelete = (index) => {
    const newTodos = [...icompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  //完了処理
  const onClickComplete = (index) => {
    const newIncompleteTodos = [...icompleteTodos];
    newIncompleteTodos.splice(index);

    const newCompleteTodos = [...completeTodos, icompleteTodos[index]];
    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };
  //戻す処理
  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    newCompleteTodos.splice(index, 1);

    const newIncompleteTodos = [...icompleteTodos, completeTodos[index]];
    alert(newCompleteTodos);
    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
      />
      <div>
        <p>未完了</p>
        <ul>
          {icompleteTodos.map((todo, index) => {
            return (
              <div key={todo} class="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickComplete(index)}>完了</button>
                <button onClick={() => onClickDelete(index)}>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          {completeTodos.map((todo, index) => {
            return (
              <div key={todo} classNmae="list-row">
                <li>{todo}</li>
                <button onClick={() => onClickBack(index)}>戻す</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div></div>
    </>
  );
};

export default App;
