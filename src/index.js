import React from "react";
import { unstable_createRoot as createRoot } from "react-dom";
import App from "./suspense-images/App";
// import App from './suspense-data/App';
// import App from './suspense-code-splitting/App';

const root = createRoot(document.getElementById("app"));

const render = Comp => {
  root.render(<Comp />);
};

render(App);
