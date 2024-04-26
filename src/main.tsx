import React from "react";
import ReactDOM from "react-dom/client";
import { RoutesComponent } from "./routes/routes.tsx";
import { ChakraProvider } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <RoutesComponent />
    </ChakraProvider>
  </React.StrictMode>
);
