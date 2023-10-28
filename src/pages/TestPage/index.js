import React from "react";
import "./styles.css";
import { useForm } from "react-hook-form";
import "./styles.css";

const TestPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <main className="container-fluid my-5 py-5 bg-orange">
      <div className="App">
        <form
          className="container bg-box text-center p-5 rounded-5"
          onSubmit={handleSubmit(onSubmit)}
        >
          <legend>
            <h6>LOG IN TO YOUR ACCOUNT</h6>
          </legend>
          <div class="row">
            <div className="form-control">
              <label>Email</label>
              <input
                type="text"
                name="email"
                {...register("email", {
                  required: "Email is required.",
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: "Email is not valid.",
                  },
                })}
              />
              {errors.email && (
                <p className="errorMsg">{errors.email.message}</p>
              )}
            </div>
            <div className="form-control">
              <label>Password</label>
              <input
                type="password"
                name="password"
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
            <div className="form-control">
              <label></label>
              <button type="submit">Login</button>
            </div>
          </div>
        </form>
      </div>
    </main>
  );
};

export default TestPage;
