import React from "react";

export const useForm = ({initialValues, onSubmit}) => {
  const [values, setValues] = React.useState(initialValues);
  const [error, setError] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  return {
    values,
    error,
    isSubmitting,
    handleChange: event => {
      setValues({
        ...values,
        [event.target.name]: event.target.value
      });
    },
    submit: async (event) => {
      event.preventDefault()
      if (error) setError('')
      setIsSubmitting(true)
      await onSubmit(values)
      .catch(error => setError(error.message))
      setIsSubmitting(false)
    }
  };
};