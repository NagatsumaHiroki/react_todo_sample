import React, { useEffect, useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

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
      <IncompleteTodos
        todos={icompleteTodos}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />

      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
      <div></div>
    </>
  );
};

export default App;
