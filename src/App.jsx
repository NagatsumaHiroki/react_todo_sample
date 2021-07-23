import React, { useState } from "react";
import "./styles.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodos } from "./components/IncompleteTodos";
import { CompleteTodos } from "./components/CompleteTodos";

export const App = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoText, setTodotext] = useState("");

  const [icompleteTodos, setIncompleteTodos] = useState([]);
  const [icompleteTitles, setIncompleteTites] = useState([]);

  const [completeTodos, setCompleteTodos] = useState([]);

  const TotalTodos = icompleteTodos.length + completeTodos.length;

  //入力時にsetTodotextに値を設定
  const onChangeTodoTitle = (event) => setTodoTitle(event.target.value);
  //入力時にsetTodotextに値を設定
  const onChangeTodoText = (event) => setTodotext(event.target.value);

  //登録処理
  const onClickAdd = () => {
    if (todoText === "") return;
    if (todoTitle === "") return;
    const newTodos = [...icompleteTodos, todoText];
    const newTitles = [...icompleteTitles, todoTitle];
    setIncompleteTodos(newTodos);
    setIncompleteTites(newTitles);
    setTodotext("");
    setTodoTitle("");
  };

  //削除処理
  const onClickDelete = (index) => {
    const newTodos = [...icompleteTodos];
    newTodos.splice(index, 1);

    const newTitles = [...icompleteTitles];
    newTitles.splice(index, 1);
    setIncompleteTodos(newTodos);
    setIncompleteTites(newTitles);
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
        titleText={todoTitle}
        todoText={todoText}
        onChangeTodoTitle={onChangeTodoTitle}
        onChangeTodoText={onChangeTodoText}
        onClick={onClickAdd}
      />
      <div>
        総合件数：{TotalTodos}件　完了件数：{completeTodos.length}件　未完件数：
        {icompleteTodos.length}件
      </div>
      <IncompleteTodos
        todos={icompleteTodos}
        titles={icompleteTitles}
        onClickComplete={onClickComplete}
        onClickDelete={onClickDelete}
      />
      <CompleteTodos completeTodos={completeTodos} onClickBack={onClickBack} />
      <div></div>
    </>
  );
};

export default App;
