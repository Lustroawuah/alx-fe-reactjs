// src/components/FormikForm.jsx
import { useEffect, useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// You'll need to install Yup: npm install yup

const FormikForm = () => {
  // State for submission status
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  // Initial form values
  const initialValues = {
    username: '',
    email: '',
    password: ''
  };

  // Form validation schema using Yup
  const validationSchema = Yup.object({
    username: Yup.string()
      .required('Username is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required')
  });

  // Handle form submission
  const handleSubmit = async (values, { setSubmitting, resetForm }) => {
    setSubmitError(null);
    
    try {
      // Simulate API delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock successful registration
      console.log('Registration successful:', values);
      setSubmitSuccess(true);
      resetForm();
    } catch (error) {
      console.error('Registration failed:', error);
      setSubmitError('Registration failed. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  // Reset success message after showing it
  useEffect(() => {
    if (submitSuccess) {
      const timer = setTimeout(() => {
        setSubmitSuccess(false);
      }, 3000);
      
      return () => clearTimeout(timer);
    }
  }, [submitSuccess]);

  return (
    <div className="form-container">
      <h2>Register with Formik</h2>
      
      {submitSuccess && (
        <div className="success-message">
          Registration successful! Thank you for registering.
        </div>
      )}
      
      {submitError && (
        <div className="error-message">
          {submitError}
        </div>
      )}
      
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <Field
                type="text"
                id="username"
                name="username"
                className="form-control"
              />
              <ErrorMessage name="username" component="span" className="error" />
            </div>
            
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <Field
                type="email"
                id="email"
                name="email"
                className="form-control"
              />
              <ErrorMessage name="email" component="span" className="error" />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <Field
                type="password"
                id="password"
                name="password"
                className="form-control"
              />
              <ErrorMessage name="password" component="span" className="error" />
            </div>
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="submit-button"
            >
              {isSubmitting ? 'Registering...' : 'Register'}
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;