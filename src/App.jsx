import React, { useEffect, useState } from "react";
import "./styles.css";

export const App = () => {
  const [todoText, setTodotext] = useState("");
  const [icompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいい"
  ]);

  const [completeTodos, setCompleteTodos] = useState(["うううう"]);

  //入力時にsetTodotextに値を設定
  const onChangeTodoText = (event) => setTodotext(event.target.value);

  const onClickAdd = () => {
    const newTodos = [...icompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    alert(todoText);
  };

  return (
    <>
      <div>
        <input
          placeholder="TODOを入力"
          value={todoText}
          onChange={onChangeTodoText}
        />
        <button onClick={onClickAdd}>追加</button>
      </div>
      <div>
        <p>未完了</p>
        <ul>
          {icompleteTodos.map((todo) => {
            return (
              <div key={todo} class="list-row">
                <li>aaaaa</li>
                <button>完了</button>
                <button>削除</button>
              </div>
            );
          })}
        </ul>
      </div>
      <div>
        <p>完了のTODO</p>
        <ul>
          {completeTodos.map((todo) => {
            return (
              <div key={todo} classNmae="list-row">
                <li>{todo}</li>
                <button>戻す</button>
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
