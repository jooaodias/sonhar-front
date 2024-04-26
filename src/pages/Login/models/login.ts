export interface IAuthenticatedUser {
  name: string;
  email: string;
  role: 'manager' | 'user' | 'admin';
  id: number;
}