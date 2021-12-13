import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

const App = () => {
  //const buttonText = "Click me!";
  //const getButtonText = () => "Click on me!";
  //const buttonText = ["Click", "me"];
  const buttonText = { text: "Click me!" };
  return (
    <div>
      <label htmlFor="name" className="name">
        Name:
      </label>
      <input type="text" id="name"></input>
      <button
        style={{
          backgroundColor: "blue",
          color: "white",
          border: "1px solid red",
        }}
      >
        {buttonText.text}
      </button>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
