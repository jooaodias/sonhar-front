import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import { Login } from "@/pages/Login/Login";

export const RoutesComponent = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
