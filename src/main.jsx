import React from "react";
import ReactDOM from "react-dom/client";
import { TodoContextProvider } from "./store/store.jsx";
import App from "./App.jsx";
import "./index.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./translation/translate/i18n";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <I18nextProvider i18n={i18n} initialLanguage={"uz"}>
      <TodoContextProvider>
        <App />
      </TodoContextProvider>
    </I18nextProvider>
  </React.StrictMode>
);
