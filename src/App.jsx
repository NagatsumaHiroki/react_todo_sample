import React from "react";
import "./styles.css";

export const App = () => {
  const [icompleteTodos, setIncompleteTodos] = useState([
    "あああああ",
    "いいいい"
  ]);
  return (
    <>
      <div>
        <input placeholder="TODOを入力" />
        <button>追加</button>
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
          <div>
            <li>aaaaa</li>
            <button>完了</button>
            <button>削除</button>
          </div>
        </ul>
      </div>
      <div></div>
    </>
  );
};

export default App;
