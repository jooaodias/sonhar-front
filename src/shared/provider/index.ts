import { useContext } from "react";
import { UserContext } from "./loginProvider";

export const useAuthUser = () => useContext(UserContext);
