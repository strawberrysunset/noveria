import React from "react"
import {useCustomReducer} from '../misc'

const logger = (state, dispatch, action) => {
}
const reducer = (state, action) => {
  switch(action.type) {
    case 'set_error': {
      return {...state, error: action.error}
    }
    case 'set_values': {
      return {...state, values: action.values}
    }
    case 'set_isSubmitting': {
      return {...state, isSubmitting: action.isSubmitting}
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

const asyncMiddleware = async (state, dispatch, action) => {
  switch(action.type) {
    case 'submit': {
      action.event.preventDefault()
      if (state.error) dispatch({type: 'set_error', error: ''})
      dispatch({type: 'set_isSubmitting', isSubmitting: true})
      await state.onSubmit(state.values)
      .catch(error => {
        dispatch({type: 'set_error', error: error.message})
        dispatch({type: 'set_isSubmitting', isSubmitting: false})
      })
      return setTimeout(() => {
        dispatch({type: 'set_isSubmitting', isSubmitting: false})
      }, state.submitThrottleTime)
    }
    case 'updateValues' : {
      const newValues = {...state.values, 
        [action.event.target.name]: action.event.target.value
      }
      return dispatch({type: 'set_values', values: newValues})
    }
    case 'replaceValues' : {
      return dispatch({type: 'set_values', values: action.values})
    }
    default : {
      return dispatch(action)
    }
  }
}

export const useForm = ({initialValues, isSubmitting = false, onSubmit = () => {}, submitThrottleTime = 1000}) => {

  const initialState = {
    values: initialValues,
    error: '',
    isSubmitting,
    submitThrottleTime,
    onSubmit
  }

  const [state, updateForm] = useCustomReducer({
    reducerArgs: [reducer, initialState],
    middleware: [asyncMiddleware, logger]
  })

  const handleChange = React.useCallback((event) => {
    updateForm(({type: 'updateValues', event}))
  }, [updateForm])

  const submit = React.useCallback((event) => {
    updateForm(({type: 'submit', event}))
  }, [updateForm])
  
  return {...state, handleChange, submit}
}