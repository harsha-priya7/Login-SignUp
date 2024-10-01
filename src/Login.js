import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import './App.css'; // Ensure the CSS is imported

const Login = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log('Form values:', values);
    },
  });

  return (
    <div className="container-fluid login-container">
      {/* Login form */}
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div className="card p-4">
          <h2 className="text-center mb-3">Login</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="Username"
                name="username"
                onChange={formik.handleChange}
                value={formik.values.username}
                required
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={formik.handleChange}
                value={formik.values.password}
                required
              />
            </div>
            <button type="submit" className="btn btn-success btn-block">Login</button>
            <p className="text-center my-3">Or Login with</p>
            <div className="d-flex justify-content-center mb-3">
              <Link to="#" className="btn btn-outline-primary me-2">
                <i className="bi bi-facebook"></i>
              </Link>
              <Link to="#" className="btn btn-outline-info me-2">
                <i className="bi bi-twitter"></i>
              </Link>
              <Link to="#" className="btn btn-outline-danger">
                <i className="bi bi-google"></i>
              </Link>
            </div>
          </form>
          <p className="text-center mt-3">
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;