import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.svg";
import User from "../assets/User Testimonial.svg";
import arrow from "../assets/back.svg";
import { Formik, Form } from "formik";
import { TextField } from "./TextField";
import * as Yup from "yup";

export const SignUp = () => {
  const validate = Yup.object({
    Username: Yup.string()
      .min(6, "Username must be at least 6 characters")
      .required("Email is required"),
    Password: Yup.string()
      .min(8, "Password must be at least 8 characters")
      .required("Password is required"),
  });

  return (
    <div>
      <div className="container loginpage">
        <div className="row">
          <div className="col-1">
            <div className="head">
              <NavLink className="logo" to="/">
                <img src={Logo} alt="" />
              </NavLink>
              <div className="back-btn">
                <img src={arrow} alt="" />
                <NavLink to="/Camps" className="back">
                  {" "}
                  Back to campgrounds
                </NavLink>
              </div>
            </div>

            <div className="content">
              <h3>Start exploring camps from all around the world.</h3>
              <Formik
                initialValues={{
                  Username: "",
                  Password: "",
                }}
                validationSchema={validate}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {(Formik) => (
                  <div>
                    <Form>
                      <TextField
                        label="Username"
                        name="Username"
                        type="text"
                        placeholder="johndoe_91"
                      />
                      <TextField
                        label="Password"
                        name="Password"
                        type="password"
                        placeholder="Choose Your Password"
                      />
                      <button className="btn" type="submit">
                        Login
                      </button>
                    </Form>
                  </div>
                )}
              </Formik>
              <div className="text2">
                Already a user?{" "}
                <NavLink to="./LoginPage" className="link">
                  Sign In
                </NavLink>
              </div>
            </div>
          </div>

          <div className="col-1">
            <div className="content3">
              <h4>
                "YelpCamp has honestly saved me hours of research time, and the
                camps on here are definetly well picked and added."
              </h4>
              <div className="testimonial">
                <img src={User} alt="" />
                <div className="testimonial-content">
                  <h5>May Andrews</h5>
                  <small>Professional Hiker</small>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
    </div>
  );
};
export default SignUp;
