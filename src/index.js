import React from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// TODOS
// SOON
// work on project page

// LATER
// fix the "laggy" bouncing of navbar
// work on the layouts folder
// find an optimized solution for playbutton
// work on next and after components
// work on the participents modal
// find best way to import images
// make sure that the main page in highlighed in nav even after refresh
