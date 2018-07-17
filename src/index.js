import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

if (process.env.NODE_ENV !== 'production') {
    var axe = require('react-axe');
    axe(React, ReactDOM, 1000);
}

ReactDOM.render(<App />, document.getElementById("root"));
