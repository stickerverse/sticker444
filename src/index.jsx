import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Box } from "./screens/Box";

createRoot(document.getElementById("app")).render(
  <StrictMode>
    <Box />
  </StrictMode>,
);
