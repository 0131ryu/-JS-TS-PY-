const React = require("react");
// const ReactDom = require("react-dom"); //더 이상 지원x
import { createRoot } from "react-dom/client";
const WordRelay = require("./WordRelay");

// ReactDom.render(<WordRelay />, document.querySelector("#root"));
createRoot(document.getElementById("root")).render(<WordRelay />);
