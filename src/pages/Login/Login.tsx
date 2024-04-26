import "./style.css";

export const Login = () => {
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
};
