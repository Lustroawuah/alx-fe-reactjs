import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";


const validationSchema = Yup.object({
  username: Yup.string()
    .required("Username is required")
    .min(3, "Username must be at least 3 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters"),
});

const initialValues = {
  username: "",
  email: "",
  password: "",
};

const FormikForm = () => {
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const handleSubmit = (values, { setSubmitting, resetForm }) => {
    console.log("Form submitted:", values);

    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        setSubmissionStatus("success");
        resetForm();
      })
      .catch((error) => {
        console.error("Error:", error);
        setSubmissionStatus("error");
      })
      .finally(() => {
        setSubmitting(false);
      });
  };

  return (
    <div>
      <h1>User Registration (Formik)</h1>
      {submissionStatus === "success" && (
        <div className="success-message">
          Registration successful! Thank you for signing up.
        </div>
      )}
      {submissionStatus === "error" && (
        <div className="error-message">
          Something went wrong. Please try again.
        </div>
      )}
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, resetForm }) => (
          <Form>
            <div>
              <label htmlFor="username">Username:</label>
              <Field type="text" id="username" name="username" />
              <ErrorMessage name="username" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="email">Email:</label>
              <Field type="email" id="email" name="email" />
              <ErrorMessage name="email" component="div" className="error" />
            </div>

            <div>
              <label htmlFor="password">Password:</label>
              <Field type="password" id="password" name="password" />
              <ErrorMessage name="password" component="div" className="error" />
            </div>

            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Register"}
            </button>
            <button
              type="button"
              onClick={resetForm}
              className="reset-button"
            >
              Reset Form
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;