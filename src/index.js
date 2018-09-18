import React from "react";
import { unstable_createRoot as createRoot } from "react-dom";
import App from "./common/App";

const root = createRoot(document.getElementById("app"));

const render = Comp => {
  root.render(<Comp />);
};

render(App);
