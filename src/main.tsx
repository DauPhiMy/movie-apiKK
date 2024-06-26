// import React from "react";
import ReactDOM from "react-dom/client";
// import App from './App.tsx'
import "./index.css";

import { RouterProvider } from "react-router-dom";
import router from "./Router.tsx";
import ThemeContextProvider from "./context/ThemeContextProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <React.StrictMode>
    <ThemeContextProvider>
      <RouterProvider router={router} />
      {/* <App /> */}
    </ThemeContextProvider>
  // </React.StrictMode>,
);
