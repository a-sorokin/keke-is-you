import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./App.css";
import { AppContainer } from "components/AppContainer/AppContainer";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <AppContainer />
  </StrictMode>
);
