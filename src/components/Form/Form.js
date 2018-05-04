import "./Form.css"
import React from 'react';
import { render } from 'react-dom';
import { withFormik } from 'formik';
import Yup from 'yup';
import classnames from 'classnames';


const formikEnhancer = withFormik({
    validationSchema: Yup.object().shape({
      firstName: Yup.string()
        .required('First name is required.'),
      lastName: Yup.string()
        .required('Last name is required.'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is required!'),
      content:Yup.string()
      .required('Tell me something good!')
    }),
  
    handleSubmit: (payload, { setSubmitting }) => {
      alert(payload.email);
      setSubmitting(false);
    },
    displayName: 'MyForm',
  });
  
  const InputFeedback = ({ error }) =>
    error ? (
      <div className="input-feedback">{error}</div>
    ) : null;
  
  const Label = ({
    error,
    className,
    children,
    ...props
  }) => {
    return (
      <label className="label" {...props}>
        {children}
      </label>
    );
  };
  
  const TextField = ({
    type,
    id,
    label,
    error,
    value,
    onChange,
    className,
    ...props
  }) => {
    const classes = classnames(
      'input-group',
      {
        'animated shake error': !!error,
      },
      className
    );
    return (
      <div className={classes}>
        <Label htmlFor={id} error={error}>
          {label}
        </Label>
        <textarea
          id={id}
          className="text-textarea"
          type={type}
          value={value}
          onChange={onChange}
          {...props}
        />
        <InputFeedback error={error} />
      </div>
    );
  };
  
  
  const TextInput = ({
    type,
    id,
    label,
    error,
    value,
    onChange,
    className,
    ...props
  }) => {
    const classes = classnames(
      'input-group',
      {
        'animated shake error': !!error,
      },
      className
    );
    return (
      <div className={classes}>
        <Label htmlFor={id} error={error}>
          {label}
        </Label>
        <input
          id={id}
          className="text-input"
          type={type}
          value={value}
          onChange={onChange}
          {...props}
        />
        <InputFeedback error={error} />
      </div>
    );
  };
  const MyForm = props => {
    const {
      values,
      touched,
      errors,
      dirty,
      handleChange,
      handleBlur,
      handleSubmit,
      handleReset,
      isSubmitting,
    } = props;
    return (
      <form onSubmit={handleSubmit}>
        <TextInput
          id="firstName"
          type="text"
          label="First Name"
          placeholder="John"
          error={touched.firstName && errors.firstName}
          value={values.firstName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          id="lastName"
          type="text"
          label="Last Name"
          placeholder="Doe"
          error={touched.lastName && errors.lastName}
          value={values.lastName}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextInput
          id="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          error={touched.email && errors.email}
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        <TextField
        id="content"
        type="textarea"
        label="Message"
        placeholder="Wow I can't believe its butter!"
        error={touched.content && errors.content}
        value={values.content}
        onChange={handleChange}
        onBlur={handleBlur}
        />
        <button id="formButton" type="submit">
          Submit
        </button>
      </form>
    );
  };
  
  const MyEnhancedForm = formikEnhancer(MyForm);

  const Form = () => (
    <div className="form">
      <MyEnhancedForm
      />
    </div>
  );
export default Form;


