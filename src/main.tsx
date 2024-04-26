import React from "react";
import ReactDOM from "react-dom/client";
import { RoutesComponent } from "./routes/routes.tsx";
import { ChakraProvider } from "@chakra-ui/react";
import { UserContextProvider } from "./pages/Login/provider/loginProvider/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <UserContextProvider>
        <RoutesComponent />
      </UserContextProvider>
    </ChakraProvider>
  </React.StrictMode>
);
