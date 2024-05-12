export interface IAuthenticatedUser {
  name: string;
  email: string;
  role: "manager" | "user" | "admin";
  id: number;
}

export interface ILoginUser {
  email: string;
  password: string;
}

export type IRegisterUser = ILoginUser & { name: string };
