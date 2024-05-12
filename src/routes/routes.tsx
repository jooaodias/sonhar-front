import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import { Login } from "@/pages/Login/Login";
import { Register } from "@/pages/Register/Register";
import { Container } from "@chakra-ui/react";
import Header from "@/layout/Header";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      < >
        <Header />
        <Routes>
          <Route path="/*" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </>
    </BrowserRouter>
  );
};
