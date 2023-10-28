import React from "react";
import { useForm} from 'react-hook-form';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import "./styles.css"

  // 👇 Styled React Route Dom Link Component
export const LinkItem = styled(Link)`
text-decoration: none;
color: #3683dc;
&:hover {
  text-decoration: underline;
  color: #5ea1b6;
}
`;

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
    // 👇 JSX to be rendered
  return (
    <main className="container-fluid my-5 py-5 bg-orange">
        <div>
            <form className="container bg-box text-center p-5 rounded-5" onSubmit={handleSubmit(onSubmit)}>
                <legend>
                    <h1>LOG IN TO YOUR ACCOUNT</h1>
                </legend>
                <div class="row">
                    <div className="form-control">
                          <input
                            type="text"
                            name="phone"
                            placeholder="Enter your phone"
                            {...register("phone", {
                              required: "Phone is required.",
                              pattern: {
                                value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                message: "Phone is not valid."
                              }
                            })}
                          />
                          {errors.phone && <p className="errorMsg">{errors.phone.message}</p>}
                        </div>
                        <br/><br/>
                        <div className="form-control">
                          <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            {...register("password", {
                              required: "Password is required.",
                              minLength: {
                                value: 6,
                                message: "Password should be at-least 6 characters."
                              }
                            })}
                          />
                          {errors.password && (
                            <p className="errorMsg">{errors.password.message}</p>
                          )}
                        </div>
                        <br/><br/>
                        <div>
                          <label></label>
                          <button type="submit">Login</button>
                          <br/><br/>
                          <p>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                        </div>
                </div>
            </form>
            </div>
        </main>
  );
};

export default LoginPage;