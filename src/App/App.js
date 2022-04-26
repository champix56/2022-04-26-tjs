import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Button from "./components/Button/Button";

function App() {
  return (
    <div>
      <Button text="Mon button" />
      <Button bgColor="skyblue">Un button</Button>
      <Button color="magenta"><div>ABc</div></Button>
      <Button>
        <img src="https://cdn1.iconfinder.com/data/icons/photo-stickers-words/128/word_16-256.png" />
        <div>helo</div>
      </Button>
      <Button />
    </div>
  );
}

export default App;
