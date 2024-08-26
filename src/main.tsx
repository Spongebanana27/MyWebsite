import React from "react";
import ReactDOM from "react-dom/client";
import Routing from "./Routing.tsx";
import { Analytics } from "@vercel/analytics/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Analytics />
    <Routing />
  </React.StrictMode>
);
