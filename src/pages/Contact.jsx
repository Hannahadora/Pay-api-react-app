import React from "react";
import PartnersGrid from "../components/Contact.jsx/PartnersGrid";
import ButtonComponent from "../components/ButtonComponent";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const Contact = () => {
  const contact = {
    name: "",
    email: "",
    company_name: "",
    title: "",
    message: "",
    agreeToTerms: false,
  };

  const validateContactValues = Yup.object({
    name: Yup.string()
      .min(2, "Must be 2 characters or more")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    title: Yup.string().required("Required"),
    company_name: Yup.string().required("Required"),
    message: Yup.string().required("Required"),
    agreeToTerms: Yup.boolean()
      .required("Required")
      .oneOf([true], "You must accept the terms and conditions."),
  });

  const handleFormSubmit = (values, { setSubmitting, resetForm }) => {
    setTimeout(() => {
      alert("Successful");
      setSubmitting(false);
      resetForm();
      
    }, 400);
  };

  return (
    <div className="app-container lg:mt-20 mt-10">
      <h2 className="lg:text-left text-center font-bold lg:text-[60px] text-[36px] leading-[1] lg:w-[50%]">
        Submit a help request and we'll get in touch shortly.
      </h2>

      <div className="lg:flex items-center justify-between mt-20">
        <div className="lg:w-[47%]">
          <Formik
            initialValues={contact}
            validationSchema={validateContactValues}
            onSubmit={(values, { setSubmitting, resetForm }) =>
              handleFormSubmit(values, { setSubmitting, resetForm })
            }
          >
            <Form className="flex flex-col">
              <div className="mb-[20px]">
                <Field
                  className="contact-input"
                  type="text"
                  name="name"
                  placeholder="Name"
                />
                <div className="error-msg">
                  <ErrorMessage name="name" />
                </div>
              </div>

              <div className="mb-[20px]">
                <Field
                  className="contact-input"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
                <div className="error-msg">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="mb-[20px]">
                <Field
                  className="contact-input"
                  type="text"
                  name="company_name"
                  placeholder="Company Name"
                />
                <div className="error-msg">
                  <ErrorMessage name="company_name" />
                </div>
              </div>

              <div className="mb-[20px]">
                <Field
                  className="contact-input"
                  type="text"
                  name="title"
                  placeholder="Title"
                />
                <div className="error-msg">
                  <ErrorMessage name="title" />
                </div>
              </div>

              <div className="mb-[20px]">
                <Field
                  as="textarea"
                  className="contact-input"
                  name="message"
                  id="message"
                  placeholder="Message"
                  cols="20"
                  rows="10"
                ></Field>
                <div className="error-msg">
                  <ErrorMessage name="message" />
                </div>
              </div>

              <div className="flex items-center">
                <Field type="checkbox" name="agreeToTerms" />
                <label className="ml-3" htmlFor="agreeToTerms">
                  Stay up-to-date with company announcements and updates to our
                  API
                </label>
              </div>
              <div className="error-msg">
                <ErrorMessage name="agreeToTerms" />
              </div>

              <div className="mt-10">
                <ButtonComponent
                  type={"submit"}
                  title={"Submit"}
                  tert={"tert-btn"}
                />
              </div>
            </Form>
          </Formik>
        </div>

        <div className="lg:ml-[24px] lg:mt-[0] mt-[40px] lg:w-[47%]">
          <h3 className="font-medium lg:text-[40px] text-[24px] lg:text-left text-center">
            Join thousand of innovators already building with us
          </h3>
          <PartnersGrid />
        </div>
      </div>
    </div>
  );
};

export default Contact;
