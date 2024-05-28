import './login.css';

const Login = () => {
  return (
  <>
  <div className="container">
  <div className="wrapper">
    <form>
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" placeholder="Username" required/>
            <i className='bx bx-user'></i>
        </div>
        <div className="input-box">
            <input type="password" placeholder="Password" required/>
            <i className='bx bx-lock-alt'></i>
        </div>
        <div className="remember-forgot">
            <label><input type="checkbox"/> Remember Me</label>
            <a href="#">Forgot password?</a>
        </div>
        <button type="button" className="btn">Login</button>
        <div className="register-link">
            <p>Don't have an account? <a href="#">Register</a></p>
        </div>
    </form>
  </div>
  </div>
  </>
  )
}

export default Login