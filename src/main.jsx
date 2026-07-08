import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Day03 from "./Pages/day03/Day03";
import Day05 from "./Pages/day05/Day05";
import Day06 from "./Pages/day06/Day06";
import Day07 from "./Pages/day07/Day07";

import "./Pages/style/index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Day07 />
  </StrictMode>,
);
