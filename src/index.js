import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import { route } from "./route";
import { Provider } from "react-redux";
import { store } from "./store";
// import Demo from "./Demos/demo";
// import Demo1 from "./Demos/demo1";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    {/* <React.StrictMode> */}
    <RouterProvider router={route}>
      {/* <Demo />
      <Demo1 /> */}
    </RouterProvider>

    {/* </React.StrictMode> */}
  </Provider>
);

reportWebVitals();
