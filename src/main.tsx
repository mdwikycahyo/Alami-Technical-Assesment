import React from "react";
import ReactDOM from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import TagManager from 'react-gtm-module'
import App from "./App.tsx";
import WAChatbot from "./pages/projects/wa-chatbot/index.tsx";

import "./index.css";

const tagManagerArgs = {
  gtmId: process.env.REACT_APP_GTM_ID || "",
}

TagManager.initialize(tagManagerArgs)

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/project/wa-chatbot",
    element: <WAChatbot />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
