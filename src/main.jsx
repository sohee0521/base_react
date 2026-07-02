import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Day03 from "./Pages/day03/Day03";

import "./Pages/style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Day03 />
  </StrictMode>,
);
