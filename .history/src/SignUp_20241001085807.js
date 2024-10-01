signup import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import './App.css'; // Ensure the CSS is imported

const Signup = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      username: '',
      password: '',
    },
    onSubmit: values => {
      console.log('Form values:', values);
    },
  });

  return (
    <div className="container-fluid signup-container">
      {/* Signup form */}
      <div className="col-md-6 d-flex justify-content-center align-items-center">
        <div className="card p-4">
          <h2 className="text-center mb-3">Sign Up</h2>
          <form onSubmit={formik.handleSubmit}>
            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                required
              />
            </div>
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
            <button type="submit" className="btn btn-success btn-block">Sign Up</button>
          </form>

          {/* Or Sign Up with social icons */}
          <p className="text-center my-3">Or Sign Up with</p>
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

          <p className="text-center mt-3">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;