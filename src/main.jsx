import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Day03 from "./Pages/day03/Day03";
import Day05 from "./Pages/day05/Day05";

import "./Pages/style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Day05 />
  </StrictMode>,
);
