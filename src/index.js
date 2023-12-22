import { StrictMode } from "react";
import { render } from "react-dom";
import "index.module.scss";
import "reset.module.scss";
import App from "App";

render(
  <StrictMode>
    <App />
  </StrictMode>,
  document.getElementById("root")
);
