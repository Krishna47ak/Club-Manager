import React, { Fragment, useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { connect } from 'react-redux'

import { login } from "../store/actions/auth";

const SignIn = ({ isAuthenticated, login }) => {
  const history = useNavigate()

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = formData;
  const onChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password, history)
    console.log("logged");
  };

  if (isAuthenticated) {
    return <Navigate to="/profile" />
  }

  return (
    <Fragment>
      <section className="flex flex-col justify-center items-center space-y-10 p-10 h- " style={{ backgroundColor: "#004f58" }}>
        <h1 className="text-white text-3xl mt-14 ">Login</h1>
        <p className="text-white text-xl ">
          <i className="fas fa-user"></i> Sign In to Your Account
        </p>
        <form className="flex flex-col " onSubmit={onSubmit}>
          <div className="mb-6">
            <input
              className="w-80 pr-5 pl-5 py-2 rounded-2xl"
              value={email}
              onChange={onChange}
              type="email"
              placeholder="Email Address"
              name="email"
              required
            />
          </div>
          <div className="mb-10">
            <input
              className="w-80 pr-5 pl-5 py-2 rounded-2xl"
              value={password}
              onChange={onChange}
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>
          <input type="submit" className="btn btn-primary " value="Login" />
        </form>
        <p className="text-white cursor-pointer pb-36 ">
          Don't have an account? <Link className='text-blue-400' to="/sign-up">Sign Up</Link>
        </p>
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(SignIn)
