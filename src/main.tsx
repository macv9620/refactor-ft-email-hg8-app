import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { NextUIProvider } from "@nextui-org/react";

import "./index.css";
import { StateProvider } from "./context/StateContext.tsx";
import reducer, { initialState } from "./context/StateReducer.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NextUIProvider>
      <StateProvider initialState={initialState} reducer={reducer}>
        <App />
      </StateProvider>
    </NextUIProvider>
  </React.StrictMode>
);
