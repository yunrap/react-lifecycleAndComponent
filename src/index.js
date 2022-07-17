import React from "react";
import ReactDOM from "react-dom/client";
import JoinForm from "./JoinForm";
import reportWebVitals from "./reportWebVitals";

import "./style.css";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div>
    <JoinForm></JoinForm>
  </div>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
