import React from "react"

export const useForm = ({initialValues, onSubmit}) => {

  const [values, setValues] = React.useState(initialValues);
  const [error, setError] = React.useState('')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [submitPause, setSubmitPause] = React.useState(1000)

  const handleChange = event => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  }

  const submit = async event => {
    event.preventDefault()
    if (error) setError('')
    setIsSubmitting(true)
    await onSubmit(values)
    .catch(error => {
      setError(error.message)
      setIsSubmitting(false)
    })
    setTimeout(() => setIsSubmitting(false), submitPause) // Prevent spam.
  }

  const manualSet = (obj) => {
    setValues({...values, ...obj});
  }

  return {
    values,
    error,
    isSubmitting,
    manualSet,
    handleChange,
    submit,
    setSubmitPause
  };
};