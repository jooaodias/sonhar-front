import { memo } from "react";
import "./style.css";
import { IAuthenticatedUser } from "./models/login";

interface Props {
  setLoggedUser: (useInfo: IAuthenticatedUser) => void;
}
export const Login: React.FC<Props> = memo(({ setLoggedUser }) => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-heading">Login</h2>
        <form className="login-form">
          <div className="form-group">
            <input
              type="text"
              id="username"
              name="username"
              placeholder="Username"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Password"
            />
          </div>
          <button type="submit" className="login-button">
            Login
          </button>
        </form>
      </div>
    </div>
  );
});
