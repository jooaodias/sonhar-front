import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@/pages/Home/Home";
import { Login } from "@/pages/Login/Login";
import { useAuthUser } from "@/pages/Login/provider";

export const RoutesComponent = () => {
  const { setLoggedUser } = useAuthUser();
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login {...{ setLoggedUser }} />} />
      </Routes>
    </BrowserRouter>
  );
};
