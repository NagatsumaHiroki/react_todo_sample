import React from "react";
import Colorfull from "./components/Colorfull";

const App = () => {
  const onClickButton = () => alert();
  const contetStyle = {
    color: "blue",
    fontSize: "18px"
  };
  const contetLedyStyle = {
    color: "pink",
    fontSize: "18px"
  };
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <Colorfull color="blue" message="お元気ですか" />
      <p style={contetLedyStyle}>元気です</p>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
