import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import styled from "@emotion/styled";
import "./styles.css";

// 👇 Styled React Route Dom Link Component
export const LinkItem = styled(Link)`
  text-decoration: none;
  color: #3683dc;
  &:hover {
    text-decoration: underline;
    color: #5ea1b6;
  }
`;

const SignupPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  // 👇 JSX to be rendered
  return (
    <main className="container-fluid my-5 py-5 bg-orange">
      <div className="App">
        <form
          className="container bg-box text-center p-5 rounded-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend>
            <h1>Register Here</h1>
          </legend>
          <div class="row">
            <div className="form-control">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <input
                type="text"
                name="phone"
                placeholder="Enter your phone"
                {...register("phone", {
                  required: "Phone is required.",
                  pattern: {
                    value: /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/,
                    message: "Phone is not valid.",
                  },
                })}
              />
              {errors.phone && (
                <p className="errorMsg">{errors.phone.message}</p>
              )}
            </div>
            <div className="form-control">
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                {...register("name", {
                  required: "Name is required.",
                  pattern: {
                    message: "Name is not valid.",
                  },
                })}
              />
              {errors.name && <p className="errorMsg">{errors.name.message}</p>}
            </div>
            <div className="form-control">
              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                {...register("password", {
                  required: "Password is required.",
                  minLength: {
                    value: 6,
                    message: "Password should be at-least 6 characters.",
                  },
                })}
              />
              {errors.password && (
                <p className="errorMsg">{errors.password.message}</p>
              )}
            </div>
            <div>
              <label></label>
              <button type="submit">Sign In</button>
              <p>
                Already have an account? <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default SignupPage;
