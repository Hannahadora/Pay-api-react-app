import React, { useState } from "react";
import ButtonComponent from "../components/ButtonComponent";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Signup = () => {
  const contact = {
    first_name: "yjfyu",
    last_name: "",
    email: "",
    phone_number: "",
    password: "",
  };

  const validateContactValues = Yup.object({
    first_name: Yup.string()
      .min(2, "Must be 2 characters or more")
      .required("Required"),
    last_name: Yup.string()
      .min(2, "Must be 2 characters or more")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    phone_number: Yup.string().required("Required"),
    password: Yup.string()
      .min(8, "Must be 8 characters or more")
      .required("Required"),
  });

  const handleFormSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="app-container">
      <div className="lg:w-[60%] mx-auto lg:my-[70px] my-[50px]">
        <h3 className="text-center font-medium text-[30px]">Sign In Here</h3>

        <div className="mt-[40px]">
          <Formik
            initialValues={contact}
            validationSchema={validateContactValues}
            onSubmit={(values, { setSubmitting }) =>
              handleFormSubmit(values, { setSubmitting })
            }
          >
            <Form className="flex flex-col">
              <div className="mb-[20px]">
                <Field
                  className="signup-input"
                  name="first_name"
                  placeholder="First name"
                />
                <ErrorMessage name="first_name" />
              </div>

              <div className="mb-[20px]">
                <Field
                  className="signup-input"
                  name="last_name"
                  placeholder="Last name"
                />
                <ErrorMessage className="mb-[20px]" name="last_name" />
              </div>

              <div className="mb-[20px]">
                <Field
                  className="signup-input"
                  name="email"
                  placeholder="Email"
                />
                <ErrorMessage className="mb-[20px]" name="email" />
              </div>

              <div className="mb-[20px]">
                <Field
                  className="signup-input"
                  name="phone_number"
                  placeholder="Phone number"
                />
                <ErrorMessage className="mb-[20px]" name="phone_number" />
              </div>

              <div className="mb-[20px]">
                <Field
                  className="signup-input"
                  name="password"
                  placeholder="Password"
                />
                <ErrorMessage name="password" />
              </div>

              <div className="flex items-center">
                <Field as="checkbox" id="update" value={contact.update} />
                <label className="ml-3" htmlFor="update">
                  I agree to terms and policies
                </label>
              </div>

              <div className="mt-10">
                <ButtonComponent title={"Submit"} tert={"tert-btn"} />
              </div>
            </Form>
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default Signup;
